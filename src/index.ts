import "frida-il2cpp-bridge";
import { printBoolFields, printFloatFields, printIntFields } from "./il2cppFieldPrinter";

console.log(" ## Frida loaded successfully ##");

// Initial console.log override will be replaced by enableCallStackTracing
// send(pokemonDataArray1);

const MAGIC_CHARGE_METHOD_NAME = "COJCHJGGFNH"; //Take float as parameter
const OBJECTION_INITIALIZE_METHOD_NAME = "CDIBEDJGBEN"; //Various Obscure Classes use this as entry point for storing encrypted values
const INT_PRE_SET_METHOD_NAME = "MJLLCIJBIHK"; //Various methods calls this which will be passed to Obscure Int Classes

const DAMAGE_HANDLER_CLASS_NAME = "GNHJFFFMBDL";
const DAMAGE_FACTOR_METHOD_NAME = "EPJMNILBCEM";

Il2Cpp.perform(function() {

    TraceAssembly("Assembly-CSharp");   //Track all the calls made to the Assembly-CSharp
    BacktraceAssembly("Assembly-CSharp");   //Print the backtrace of the Assembly-CSharp

    TraceClass("Assembly-CSharp", "SomeNamespace.SomeClassName");   //Track all the calls made to the SomeNamespace.SomeClassName
    BacktraceClass("Assembly-CSharp", "SomeNamespace.SomeClassName");   //Print the backtrace of the SomeNamespace.SomeClassName

    TraceMethod("Assembly-CSharp", "SomeNamespace.SomeClassName", "SomeMethodName");   //Track all the calls made to the SomeMethodName
    BacktraceMethod("Assembly-CSharp", "SomeNamespace.SomeClassName", "SomeMethodName");   //Print the backtrace of the method that is called
    LazyPrintMethodName("Assembly-CSharp", "SomeNamespace.SomeClassName", "SomeMethodName");   //Print the name of the method that is called

    // Implement a method that will be called when the SomeMethodName is called
    GetMethod("Assembly-CSharp", "SomeNamespace.SomeClassName", "SomeMethodName").implementation = function(...args: any[]){
        const [param1, param2] = args;
        const result = this.method("SomeMethodName").invoke(...args);
        return result;
    };
});




//#region Helper Functions

function LazyPrintMethodName(assemblyName:string, className:string, methodName:string){
    GetMethod(assemblyName, className, methodName).implementation = function(...args: any[]){
        const result = this.method(methodName).invoke(...args);
        console.log("Called Method : " + methodName);
        return result;
    };
}

function getAssembly(assemblyName:string): Il2Cpp.Assembly{
    return Il2Cpp.domain.assembly(assemblyName);
}

function getClass(assemblyName:string,className:string):Il2Cpp.Class{
    const assembly = Il2Cpp.domain.assembly(assemblyName).image;
    const resultClass = assembly.class(className);
    return resultClass;
}

function GetMethod(assemblyName:string,className:string,methodName:string):Il2Cpp.Method{
    const targetClass = getClass(assemblyName,className);
    const targetMethod = targetClass.method(methodName);
    return targetMethod;
}

function TraceAssembly(assemblyName:string):void{
    Il2Cpp.trace(true).assemblies(getAssembly(assemblyName)).and().attach();
}

function TraceMethod(assemblyName:string,className:string,methodName:string):void{
    Il2Cpp.trace(true).methods(GetMethod(assemblyName, className, methodName)).and().attach();
}

function TraceClass(assemblyName:string,className:string):void{
    Il2Cpp.trace(true).classes(getClass(assemblyName, className)).and().attach();
}

function traceClassExceptMethod(assemblyName:string, className:string, excludedMethodName:string): void {
	try {
		const targetClass = getClass(assemblyName, className);
		for (const method of targetClass.methods as Il2Cpp.Method[]) {
			if (method.name === excludedMethodName) continue;
			Il2Cpp.trace(true).methods(method).and().attach();
		}
	} catch (error) {
		console.log(`Failed to trace class ${assemblyName}.${className} excluding ${excludedMethodName}:`, error);
	}
}

function installNumericFieldPrinterOnMethod(assemblyName:string, className:string, triggerMethodName:string): void {
	try {
		const targetClass = getClass(assemblyName, className);
		const triggerMethod = targetClass.method(triggerMethodName);

		const isNumericTypeName = (typeName: string): boolean => {
			const t = typeName;
			return (
				t === "System.Int32" || t === "System.Int16" || t === "System.Int64" ||
				t === "System.Byte" || t === "System.SByte" ||
				t === "System.UInt16" || t === "System.UInt32" || t === "System.UInt64" ||
				t === "System.Single" || t === "System.Double" ||
				t === "Int32" || t === "Int16" || t === "Int64" ||
				t === "Byte" || t === "SByte" ||
				t === "UInt16" || t === "UInt32" || t === "UInt64" ||
				t === "Single" || t === "Double" ||
				t === "float" || t === "double" ||
				t === "int" || t === "uint" || t === "short" || t === "ushort" || t === "long" || t === "ulong"
			);
		};

		triggerMethod.implementation = function(...parameters: any[]) {
			try {
				console.log(`[NUMERIC FIELDS] ${assemblyName}.${className}.${triggerMethodName}`);
				for (const field of (targetClass as any).fields as Il2Cpp.Field[]) {
					try {
						const fieldName = (field as any).name as string;
						const typeName = ((field as any).type && (field as any).type.name) ? (field as any).type.name as string : "";
						if (!isNumericTypeName(typeName)) continue;

						let value: any;
						let printed = false;
						try {
							value = (this as any).field(fieldName).value;
							console.log(`  - ${fieldName} (${typeName}): ${value}`);
							printed = true;
						} catch (_) {}

						if (!printed) {
							try {
								value = targetClass.field(fieldName).value;
								console.log(`  - static ${fieldName} (${typeName}): ${value}`);
								printed = true;
							} catch (_) {}
						}
					} catch (_) {}
				}
			} catch (innerError) {
				console.log(`Error printing numeric fields for ${assemblyName}.${className}:`, innerError);
			}

			return (this as any).method(triggerMethodName).invoke(...parameters);
		};
	} catch (error) {
		console.log(`Failed to install numeric field printer on ${assemblyName}.${className}.${triggerMethodName}:`, error);
	}
}

function BacktraceAssembly(assemblyName:string):void{
    Il2Cpp.backtrace().verbose(true)
    .assemblies(Il2Cpp.domain.assembly(assemblyName))
    .and().attach();
}

function BacktraceClass(assemblyName:string,className:string):void{
    Il2Cpp.backtrace().verbose(true)
    .assemblies(Il2Cpp.domain.assembly(assemblyName))
    .filterClasses(clazz => clazz.name.includes(className))
    .and().attach();
}

function BacktraceMethod(assemblyName:string,className:string,methodName:string):void{
    Il2Cpp.backtrace().verbose(true)
    .assemblies(Il2Cpp.domain.assembly(assemblyName))
    .filterClasses(clazz => clazz.name.includes(className))
    .filterMethods(method => method.name.toLowerCase().includes(methodName.toLowerCase()))
    .and().attach();
}

function DebugObject(obj:Il2Cpp.Object){
    console.log("# DEBUG OBJECT - START #")
    console.log("Debug Object Type : " + typeof obj);
    console.log("pObj : " + obj);
    console.log("Constructor : " + obj.constructor.name);
    console.log("Keys : " + Object.keys(obj));
    console.log("# DEBUG OBJECT - END #");
}

function PrintArray(arr: Il2Cpp.Array){
    console.log("# PRINT ARRAY - START #")
    console.log("Keys : " + arr.length);
    for(let i = 0; i < arr.length; i++){
        const value = arr.get(i);
        console.log("Value : " + value);
    }
    console.log("# PRINT ARRAY - END #");
}

function printDictionary(dictionary: Il2Cpp.Object){
    const dictionaryCount = dictionary.field("_count").value as number;
    
    console.log(`\n=== Dictionary Contents (${dictionaryCount} items) ===`);
    
    try {
        // Get the entries array from the dictionary
        const entries = dictionary.field("_entries").value as Il2Cpp.Array;
        
        // Iterate through all entries in the internal array
        // Dictionary<TKey, TValue> uses Entry[] _entries internally
        for (let i = 0; i < dictionaryCount; i++) {
            try {
                // Access array element at index i using IL2CPP array access
                const entry = entries.get(i) as Il2Cpp.Object;
                
                // Read key and value from the entry struct
                // Entry has fields: hashCode, next, key, value
                const key = entry.field("key").value;
                const value = entry.field("value").value;
                
                console.log(`[${i}] Key: "${key}" => Value: ${value}`);
            } catch (entryError) {
                console.log(`[${i}] Error reading entry: ${entryError}`);
            }
        }
    } catch (dictError) {
        console.log(`Error iterating dictionary: ${dictError}`);
    }
    
    console.log("=== End Dictionary Contents ===\n");
}
//#endregion

