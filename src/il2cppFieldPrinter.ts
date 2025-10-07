import "frida-il2cpp-bridge";

/**
 * Type filter options for printing Il2Cpp object fields
 */
export type FieldFilter = "bool" | "float" | "int";

/**
 * Prints all fields of an Il2Cpp object filtered by specified types
 * 
 * @param obj - The Il2Cpp object to inspect
 * @param filters - Array of type filters (bool, float, int)
 * @param objectName - Optional name/description of the object for logging purposes
 * 
 * @example
 * // Print only boolean fields
 * printFilteredFields(myObject, ["bool"]);
 * 
 * @example
 * // Print boolean, float, and int fields
 * printFilteredFields(myObject, ["bool", "float", "int"], "PlayerData");
 */
export function printFilteredFields(
    obj: Il2Cpp.Object, 
    filters: FieldFilter[], 
    objectName?: string
): void {
    try {
        const objectLabel = objectName || obj.class.name || "Unknown Object";
        console.log(`\n[FILTERED FIELDS] ${objectLabel}`);
        console.log("=".repeat(60));

        const objClass = obj.class;
        const fields = objClass.fields as Il2Cpp.Field[];

        // Process each filter type
        for (const filter of filters) {
            printFieldsByType(obj, objClass, fields, filter);
        }

        console.log("=".repeat(60) + "\n");
    } catch (error) {
        console.error(`Error printing filtered fields: ${error}`);
    }
}

/**
 * Helper function to print fields of a specific type
 */
function printFieldsByType(
    obj: Il2Cpp.Object,
    objClass: Il2Cpp.Class,
    fields: Il2Cpp.Field[],
    filter: FieldFilter
): void {
    const typeNames = getTypeNamesForFilter(filter);
    const fieldValues: Array<{name: string, type: string, value: any, isStatic: boolean}> = [];

    for (const field of fields) {
        try {
            const fieldName = (field as any).name as string;
            const fieldType = (field as any).type;
            const typeName = fieldType?.name as string || "";

            // Check if field type matches the filter
            if (!typeNames.includes(typeName)) {
                continue;
            }

            // Try to read instance field
            let value: any;
            let isStatic = false;
            let success = false;

            try {
                value = obj.field(fieldName).value;
                success = true;
            } catch (_) {
                // Try static field
                try {
                    value = objClass.field(fieldName).value;
                    isStatic = true;
                    success = true;
                } catch (_) {
                    // Field couldn't be read
                }
            }

            if (success) {
                fieldValues.push({
                    name: fieldName,
                    type: typeName,
                    value: value,
                    isStatic: isStatic
                });
            }
        } catch (_) {
            // Skip fields that cause errors
        }
    }

    // Print results for this filter
    if (fieldValues.length > 0) {
        console.log(`\n[${filter.toUpperCase()} FIELDS] (${fieldValues.length} found)`);
        for (const fieldInfo of fieldValues) {
            const staticLabel = fieldInfo.isStatic ? "static " : "";
            const valueStr = formatValue(fieldInfo.value, filter);
            console.log(`  ${staticLabel}${fieldInfo.name} (${fieldInfo.type}): ${valueStr}`);
        }
    } else {
        console.log(`\n[${filter.toUpperCase()} FIELDS] (none found)`);
    }
}

/**
 * Get type names that match the filter
 */
function getTypeNamesForFilter(filter: FieldFilter): string[] {
    switch (filter) {
        case "bool":
            return ["System.Boolean", "Boolean", "bool"];
        case "float":
            return ["System.Single", "System.Double", "Single", "Double", "float", "double"];
        case "int":
            return [
                "System.Int32", "System.Int16", "System.Int64",
                "System.Byte", "System.SByte",
                "System.UInt16", "System.UInt32", "System.UInt64",
                "Int32", "Int16", "Int64",
                "Byte", "SByte",
                "UInt16", "UInt32", "UInt64",
                "int", "uint", "short", "ushort", "long", "ulong", "byte", "sbyte"
            ];
        default:
            return [];
    }
}

/**
 * Format value for display based on type
 */
function formatValue(value: any, filter: FieldFilter): string {
    if (value === null || value === undefined) {
        return "null";
    }

    switch (filter) {
        case "bool":
            return value ? "true" : "false";
        case "float":
            return typeof value === "number" ? value.toFixed(6) : String(value);
        case "int":
            return String(value);
        default:
            return String(value);
    }
}

/**
 * Convenience function to print all numeric and boolean fields
 * 
 * @param obj - The Il2Cpp object to inspect
 * @param objectName - Optional name/description of the object
 */
export function printAllFilteredFields(obj: Il2Cpp.Object, objectName?: string): void {
    printFilteredFields(obj, ["bool", "float", "int"], objectName);
}

/**
 * Convenience function to print only boolean fields
 */
export function printBoolFields(obj: Il2Cpp.Object, objectName?: string): void {
    printFilteredFields(obj, ["bool"], objectName);
}

/**
 * Convenience function to print only float fields
 */
export function printFloatFields(obj: Il2Cpp.Object, objectName?: string): void {
    printFilteredFields(obj, ["float"], objectName);
}

/**
 * Convenience function to print only int fields
 */
export function printIntFields(obj: Il2Cpp.Object, objectName?: string): void {
    printFilteredFields(obj, ["int"], objectName);
}

