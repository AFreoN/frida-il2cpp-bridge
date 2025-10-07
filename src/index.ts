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

    InstantMagicRecharge();
    DamageFactorHandler();

    getMethod("Root", "GNHJFFFMBDL", "MJLJIGOOMMP").implementation = function(...args: any[]){
        const [obj1, obj2, vector1, vector2, obj3, vector3] = args;
        const result = this.method("MJLJIGOOMMP").invoke(...args);
        console.log("MJLJIGOOMMP : " + obj1 + " | " + obj2 + " | " + vector1 + " | " + vector2 + " | " + obj3 + " | " + vector3 + " | " + result);

        let str1 = obj1.field("ENJHHNGKADM").value;
        let str2 = obj1.field("JKPIOIONHNO").value;
        let str3 = obj1.field("OJNKIMCANDO").value;
        console.log("Obj 1 Strings : " + str1 + " | " + str2 + " | " + str3);

        const obsFloat = getMethod("ACTk.Runtime", "CodeStage.AntiCheat.ObscuredTypes.ObscuredFloat", "CDIBEDJGBEN");
        let obsFloat1 = obj1.field("EDCGPCKLLMJ").value;
        let obsFloat2 = obj1.field("LLJNACBDAEK").value;
        let obsFloat3 = obj1.field("OOGFINJONHB").value;
        let obsFloat4 = obj1.field("PHPAKGEDLDI").value;
        // let f1Value = obsFloat.invoke(obsFloat1);

        console.log("Obs Float 1 : " + obsFloat1.method("AEHFPAGIIHL").invoke() + " | " + obsFloat2.method("AEHFPAGIIHL").invoke() + " | " + obsFloat3.method("AEHFPAGIIHL").invoke() + " | " + obsFloat4.method("AEHFPAGIIHL").invoke());


        str1 = obj2.field("ENJHHNGKADM").value;
        str2 = obj2.field("JKPIOIONHNO").value;
        str3 = obj2.field("OJNKIMCANDO").value;
        console.log("Obj 2 Strings : " + str1 + " | " + str2 + " | " + str3);
        
        let obsFloat5 = obj2.field("EDCGPCKLLMJ").value;
        let obsFloat6 = obj2.field("LLJNACBDAEK").value;
        let obsFloat7 = obj2.field("OOGFINJONHB").value;
        let obsFloat8 = obj2.field("PHPAKGEDLDI").value;
        console.log("Obs Float 5 : " + obsFloat5.method("AEHFPAGIIHL").invoke() + " | " + obsFloat6.method("AEHFPAGIIHL").invoke() + " | " + obsFloat7.method("AEHFPAGIIHL").invoke() + " | " + obsFloat8.method("AEHFPAGIIHL").invoke());


        return result;
    };
    // traceMethod("Root", "GNHJFFFMBDL", "EPJMNILBCEM");
    // traceMethod("Root", "ODINKFAKNIF", "CPHKCNMCJCK");

    // AllObscureIntHandler();

    // traceClass("Root", "RaidInfo");
    // traceClass("Root", "OCBAHIHDLLI");
    // traceClass("Root", "Nekki.Utils.DetailedLog");
    // traceClass("Root", "Nekki.Utils.RaidBetaLogger");
    
    traceClass("ACTk.Runtime", "CodeStage.AntiCheat.Storage.ObscuredFilePrefs");
    // traceClass("Root", "LHLDAKEKDFM");
    /* getMethod("Root", "LHLDAKEKDFM", "PDHDCBHLDPE").implementation = function(...args: any[]){
        const [someList, eventType] = args;
        // const xlmDocument = this.field("LHMKDCOEIBE").value.method("get_Version").invoke();
        // console.log("PDHDCBHLDPE called" + someList + " | " + eventType + " | " + xlmDocument);

        // const xmlNode = this.method("PNLKEALHEHK").invoke();
        // console.log("PDHDCBHLDPE inner text : " + xmlNode.method("get_Value").invoke());

        // console.log("String : " + this.field("OJNKIMCANDO").value);
        // printFloatFields(this as Il2Cpp.Object, "PDHDCBHLDPE");
        // printIntFields(this as Il2Cpp.Object, "PDHDCBHLDPE");

        const int1 = this.field("ENFNFACFGLI").value; // First obscure int
        const int1Hidden = int1.field("hiddenValue").value;
        const int1Fake = int1.field("currentCryptoKey").value;

        const int2 = this.field("IIPOAAJNJNI").value; // Second obscure int
        const int2Hidden = int2.field("hiddenValue").value;
        const int2Fake = int2.field("currentCryptoKey").value;

        const int3 = this.field("NONFPIBDJCL").value; // Third obscure int
        const int3Hidden = int3.field("hiddenValue").value;
        const int3Fake = int3.field("currentCryptoKey").value;

        // const meth = getMethod("Root", "CodeStage.AntiCheat.ObscuredTypes.ObscuredInt", "CDIBEDJGBEN");

        console.log("Event Type : " + eventType + " | " + int1Hidden + " | " + int1Fake);
        console.log("Event Type : " + eventType + " | " + int2Hidden + " | " + int2Fake);
        console.log("Event Type : " + eventType + " | " + int3Hidden + " | " + int3Fake);

        return this.method("PDHDCBHLDPE").invoke(someList, eventType);
    } */
    // traceClass("Root", "NNLHAMIJIHL");
    // traceClass("System.Xml", "System.Xml.XmlNode");
    // traceMethod("System.Xml", "System.Xml.XmlDocument", "GetEventArgs");
    // traceMethod("System.Xml", "System.Xml.XmlDocument", "Load");
    // traceMethod("System.Xml", "System.Xml.XmlDocument", "LoadXml");

    /* 
    getMethod("Root","BELLICPNJJL","BLDJAEBNLME").implementation = function(someString, iMessage, someAction, floatValue, someObject):number{
        // const [someString, iMessage, someAction, floatValue, someObject] = args;
        let result = 0;
        if(someAction)
            result = this.method("BLDJAEBNLME").invoke(someString, iMessage, someAction, floatValue, someObject);
        else
            result = this.method("BLDJAEBNLME").invoke(someString, iMessage);
        console.log("BLDJAEBNLME : " + someString + " | " + someAction + " | " + floatValue + " | " + result);
        console.log("Result : " + result);
        return result;
    } */

    // traceAssembly("SmartFox2X");
    // traceMethod("SmartFox2X", "Sfs2X.SmartFox", "Connect");
    // traceMethod("SmartFox2X", "Sfs2X.SmartFox", "EnqueueEvent");
    // traceClass("SmartFox2X", "Sfs2X.Requests.ExtensionRequest");
    /* getMethod("SmartFox2X", "Sfs2X.Requests.ExtensionRequest", "Init").implementation = function(...args: any[]){
        const [extCmd, parameters, room, useUDP] = args;
        console.log("Init : " + extCmd + " | " + parameters + " | " + room + " | " + useUDP);
        return this.method("Init").invoke(extCmd, parameters, room, useUDP);
    } */
/*     getMethod("SmartFox2X", "Sfs2X.SmartFox", "Send").implementation = function(...args: any[]){
        const [request] = args;
        const ISFSObject = request.field("parameters")?.value;
        if(ISFSObject){
            const json = ISFSObject.method("Dump").invoke();
            console.log("Send : " + json);
        }

        // const KEY_CMD = request.field("KEY_CMD").value;
        // const KEY_PARAMS = request.field("KEY_PARAMS").value;
        // const KEY_ROOM = request.field("KEY_ROOM").value;
        // console.log("Send : " + KEY_CMD + " | " + KEY_PARAMS + " | " + KEY_ROOM);
        return this.method("Send").invoke(request);
    } */
    // traceMethod("SmartFox2X", "Sfs2X.SmartFox", "SendHandshakeRequest");
    // traceClass("SmartFox2X", "Sfs2X.Bitswarm.WebSocketClient");
    // traceClass("SmartFox2X", "WebSocketSharp.WebSocket");

    // traceMethod("SmartFox2X", "Sfs2X.Core.ThreadManager", "EnqueueSend");
    /* getMethod("SmartFox2X", "Sfs2X.Core.ThreadManager", "EnqueueSend").implementation = function(...args: any[]){
        const [callback, header, data, udp] = args;
        console.log("EnqueueSend : " + " | " + data + " | " + udp);
        
        // Safely try to read data methods with error handling
        try {
            let dataInfo = "Data unwrapped : ";
            
            // Check if data object exists and has methods
            if (data && typeof data.method === 'function') {
                try {
                    const readIntMethod = data.method("ReadInt");
                    if (readIntMethod) {
                        dataInfo += readIntMethod.invoke() + " | ";
                    } else {
                        dataInfo += "ReadInt not found | ";
                    }
                } catch (e) {
                    dataInfo += "ReadInt error: " + e.message + " | ";
                }
                
                try {
                    const readFloatMethod = data.method("ReadFloat");
                    if (readFloatMethod) {
                        dataInfo += readFloatMethod.invoke() + " | ";
                    } else {
                        dataInfo += "ReadFloat not found | ";
                    }
                } catch (e) {
                    dataInfo += "ReadFloat error: " + e.message + " | ";
                }
                
                try {
                    const readTextMethod = data.method("ReadUTF");
                    if (readTextMethod) {
                        dataInfo += readTextMethod.invoke();
                    } else {
                        dataInfo += "ReadText not found";
                    }
                } catch (e) {
                    dataInfo += "ReadText error: " + e.message;
                }
            } else {
                dataInfo += "Data object is null or doesn't have method function";
            }
            
            console.log(dataInfo);
        } catch (error) {
            console.log("Error processing data object:", error.message);
        }
        
        return this.method("EnqueueSend").invoke(callback, header, data, udp);
    } */



    // traceClass("SmartFox2X", "WebSocketSharp.WebSocket");
/*     traceMethod("SmartFox2X", "WebSocketSharp.WebSocket", "send");
    traceMethod("SmartFox2X", "WebSocketSharp.WebSocket", "sendAsync");
    traceMethod("SmartFox2X", "WebSocketSharp.WebSocket", "sendHttpRequest");
    traceMethod("SmartFox2X", "WebSocketSharp.WebSocket", "sendHttpResponse"); */

    // backtraceMethod("Root", "OHNMLEMFMDO", INT_PRE_SET_METHOD_NAME);

    // AllDamageCallers();
    //(OCHODNMGBFD ILCODGNDIBN, OCHODNMGBFD PEFLNGLIBFK, global::Vector3 LAGLBLPJCBL, global::Vector3 BJONCJJGANC, GNHJFFFMBDL JMBJPPNGFJG, global::Vector3 GDKOFPAFIHB)
    // traceMethod("Root", "GNHJFFFMBDL", "MJLJIGOOMMP");
    // traceMethod("Root", "ODINKFAKNIF", "CPHKCNMCJCK");
    
    // traceClass("Root", "GCCFLCGJKPO"); //
    // backtrace("Root", "GCCFLCGJKPO", "KOCKKHJHKNF");
    // getMethod("Root", "GCCFLCGJKPO", "KOCKKHJHKNF").implementation = function(...args: any[]){
    //     const [characterType] = args;
    //     const result = this.method("KOCKKHJHKNF").invoke(characterType);
    //     console.log("KOCKKHJHKNF : " + characterType + " | " + result + " | " + result.field("PIFDDFCDJIP").value);
    //     return result;
    // }
    // traceMethod("Root", "ODINKFAKNIF", "DNBPGNECFJD");
    // traceMethod("Root", "JKHNPNDHGOB", "EKGOJLBHBGB");

    // traceMethod("Root", "GNHJFFFMBDL", "EPJMNILBCEM");  // Damage calculation: 1 means full damage, 0 means no damage (Object, bool, bool, object, List<string>) => float


    // traceMethod("Root", "APIIIBEGBJI", "EMAHGDGJMDG");
    // traceMethod("Root", "APIIIBEGBJI", "KKFILPFPIBL");
    // traceMethod("Root", "APIIIBEGBJI", "MFDBJCJOFNK");


    // traceMethod("Root", "APKJEHPHJDB", "NHHLEAAFCCL");  //Some timer I guess

//New code


//Not useful, only handling pain and magic recharge
// traceMethod("Root", "EDPJGJKJKHK", "BJMEMGOELBJ");  // (string, [Optional] object) => float  eg., ("DamageRecharge", User ID='0' SilhouetteItemID='0' WeaponID='0' Dan='0' Damage='0' Difficulty='0' FirstName='characterMay' LastName=''  Level='0' LotteryLevel='0') => 0



// (bool NOJFLIACBLM, BAMPIECNBAA HOEBCPICHGC, BAMPIECNBAA PGFJCGGADLB, List<JJIAODJBOEF<string, ObscuredFloat>> FDMGHLNFBKJ, string NNMBHIACOEP, ref float DBHOHEDNBFL, ref float IFCGOAJGEBH, ref float FEONCNMBOKK)
// traceMethod("Root", "GAFNDLIIMCM", "PLKGOBOCCKA");  // Very important, initializes so many obscure values and return a float
/* getMethod("Root", "GAFNDLIIMCM", "PLKGOBOCCKA").implementation = function(...args: any[]){
    const [bool1, hoebcpitchgc, pgfcggadlb, secureFloatList, controlVariableName, float1, float2, float3] = args;
    // console.log("PLKGOBOCCKA called with args: " + bool1 + ", " + hoebcpitchgc + ", " + pgfcggadlb + ", " + secureFloatList + ", " + controlVariableName + ", " + float1 + ", " + float2 + ", " + float3);
    const result = this.method("PLKGOBOCCKA").invoke(bool1, hoebcpitchgc, pgfcggadlb, secureFloatList, controlVariableName, float1, float2, float3);
    // console.log("PLKGOBOCCKA : " + controlVariableName + " | " + float1.handle.readFloat() + " | " + float2.handle.readFloat() + " | " + float3.handle.readFloat() + " | " + result);
    // console.log("PLKGOBOCCKA result: " + result);
    return result;
} */

// traceMethod("Root", "GNHJFFFMBDL", "FHHFAMCGEPA"); // (bool, string, float) => float    eg,. (false, BlockDamageFactor, 0.0000991) => 1



// traceMethod("Root", "ODINKFAKNIF", "ANKFKFGIOKC");  // looks like damage factor : (object, float) 

    // Il2Cpp.installExceptionListener("all");
});

let count = 1;
function methodImplementor(assemblyName:string, className:string, methodName:string){
    getMethod(assemblyName, className, methodName).implementation = function(...args: any[]){
        const result = this.method(methodName).invoke(...args);
        console.log("Method : " + methodName + " | " + count++);
        return result;
    };
}


function smartFoxRequestHandler(){
    // Hook ExtensionRequest.Init and pretty-print the SFSObject parameters
    getMethod("SmartFox2X", "Sfs2X.Requests.ExtensionRequest", "Init").implementation = function (...args: any[]) {
        const [extCmd, parameters, room, useUDP] = args;
    
        // forward the call to original Init implementation
        return this.method("Init").invoke(extCmd, parameters, room, useUDP);
    };


}


function AllDamageCallers(){
    traceMethod("Root", "PLBPPCNGLGA", "JHINEJPLIJH");
/* traceMethod("Root", "OHNMLEMFMDO", "MJLLCIJBIHK");
traceMethod("Root", "LHLDAKEKDFM", "LIGBNBPADNF");
traceMethod("Root", "LHLDAKEKDFM", "INIPPGPKLHO");
traceMethod("Root", "EDPJGJKJKHK", "BJMEMGOELBJ");
traceMethod("Root", "MIBBBGNCMNM", "AJHGANCBOEN");
traceMethod("Root", "HBIGDEKIJDP", "PPABDPICAFE");
traceMethod("Root", "HBIGDEKIJDP", "NGABIDNKIFA");
traceMethod("Root", "GAFNDLIIMCM", "PLKGOBOCCKA");
traceMethod("Root", "NJIDDEPLNJB", "PKHHDIKEKBN");
traceMethod("Root", "GNHJFFFMBDL", "NKNOKNJKNAG");
traceMethod("Root", "GNHJFFFMBDL", "KCHADPOOLCA");
traceMethod("Root", "GNHJFFFMBDL", "FHHFAMCGEPA"); */

traceMethod("Root", "GNHJFFFMBDL", "PLKIHMOIKKJ");
traceMethod("Root", "GNHJFFFMBDL", "EPJMNILBCEM");
traceMethod("Root", "GNHJFFFMBDL", "BMANBGHHKJJ");
traceMethod("Root", "ODINKFAKNIF", "ANKFKFGIOKC");
traceMethod("Root", "BAMPIECNBAA", "GCADIIBKHIC");
traceMethod("Root", "BAMPIECNBAA", "AJKDDBLFACM");
traceMethod("Root", "BAMPIECNBAA", "MNCAPGDNFON");
traceMethod("Root", "BAMPIECNBAA", "DPEHMBELHPN");
traceMethod("Root", "BAMPIECNBAA", "MOAENAKHGEH");
traceMethod("Root", "BAMPIECNBAA", "FKIFHPPFFJP");
traceMethod("Root", "FJFOBFHGHII", "DJEKHCJHJND");
traceMethod("Root", "HCGKKBENKMB", "IPPJDJNPPFL");
traceMethod("Root", "INBDBICLKDA", "LJDECOOAFKG");
traceMethod("Root", "INBDBICLKDA", "LMKJCJKHLFC");
}

function DamageFactorHandler(){
    getMethod("Root", DAMAGE_HANDLER_CLASS_NAME, DAMAGE_FACTOR_METHOD_NAME).implementation = function(...args: any[]){
        const [obj1, bool1, bool2, obj2, list] = args;
        let result = this.method("EPJMNILBCEM").invoke(obj1, bool1, bool2, obj2, list);
        // console.log("DAMAGE_FACTOR_METHOD : " + obj1 + " | " + bool1 + " | " + bool2 + " | " + obj2 + " | " + list + " | " + result);
    
        const isOpponent = this.method("IPBLLPBCMIE").invoke();
        // console.log("String : " + obj1.field("OEFKOAOGAGL").value);
    
/*         const getItemMethod = list.method("get_Item");
        const countProperty = list.method("get_Count");
        const count = countProperty.invoke() as number;
        for (let i = 0; i < count; i++) {
            const item = getItemMethod.invoke(i);
            console.log("Item " + i + " : " + item);
        } */
        // return 1.0;
        if(isOpponent)
            result = 0.0;

        // if(!isOpponent){
        //     result = result * 1.0;
        // }
        // else
        // {
        //     result = 0.0;
        // }
        return result;
    }
}

function rewardMoreForges(){
        // traceMethod("Root", "APKJEHPHJDB", "AANBHGHLDBJ");
    // traceMethod("Root", "APKJEHPHJDB", "ALGBOJLDOKL");
    // traceMethod("Root", "APKJEHPHJDB", "CCIEPNAGEBG");
    // traceMethod("Root", "APKJEHPHJDB", "CHBNPENGGPA");
    // traceMethod("Root", "APKJEHPHJDB", "DGGHAAMGADJ");  // Forge Material Handler: (string) => int
    // traceMethod("Root", "APKJEHPHJDB", "FJJEPKCGAHJ");
    // traceMethod("Root", "APKJEHPHJDB", "HOHKKEGKIOE");  // Forge Material Match end reward handler
    getMethod("Root", "APKJEHPHJDB", "HOHKKEGKIOE").implementation = function(...args: any[]){
        const [someObject, rewardCount] = args;
        console.log("HOHKKEGKIOE called with args: " + someObject + ", " + rewardCount);
        this.method("HOHKKEGKIOE").invoke(someObject, 10000001);
    }
}

function allIntMethod()
{
    traceMethod("Root", "BAMPIECNBAA", "FKIFHPPFFJP");
traceMethod("Root", "BAMPIECNBAA", "FNOCJIMJJIP");
traceMethod("Root", "BELLICPNJJL", "JOJHDMOACHA");
traceMethod("Root", "DGDIPCKMBJM", "GIPNCBNKGPP");
traceMethod("Root", "DGDIPCKMBJM", "GNGABKPMIOK");
traceMethod("Root", "DODLLIIKCDJ", "GDCLABLMHNC");
traceMethod("Root", "DODLLIIKCDJ", "HFONFCGAMGN");
traceMethod("Root", "ECAKEHCDPPI", "PEOCDEEOCNK");
traceMethod("Root", "ECAKEHCDPPI", "PHPLGDMGIFL");
traceMethod("Root", "EFOADBCBNMF", "ACCLFADFJFJ");
traceMethod("Root", "EFOADBCBNMF", "OAMJOPINDAJ");
traceMethod("Root", "FFJNBLLHKDI", "FGOEHJCGGEB");
traceMethod("Root", "FJFOBFHGHII", "BOPEGKIKKAE");
traceMethod("Root", "FJFOBFHGHII", "DHPEFJCPHHF");
traceMethod("Root", "FJFOBFHGHII", "DJEKHCJHJND");
traceMethod("Root", "FJFOBFHGHII", "IBJFMDHAPDA");
traceMethod("Root", "FJFOBFHGHII", "PLJGLEJPMII");
traceMethod("Root", "FJLMHKPKJOI", "ACEIAFKBEMF");
traceMethod("Root", "FJLMHKPKJOI", "CFKBFOCCJMP");
traceMethod("Root", "FJLMHKPKJOI", "ELACKGOFLEL");
traceMethod("Root", "FJLMHKPKJOI", "OAMJOPINDAJ");
traceMethod("Root", "FKBMLLJLHEF", "DGHBCMMKELN");
traceMethod("Root", "FPOGKJMHGKC", "CFKBFOCCJMP");
traceMethod("Root", "GAFNDLIIMCM", "DDAFDLOGGGN");
traceMethod("Root", "GAFNDLIIMCM", "HNMIFLPDBIJ");
traceMethod("Root", "GAFNDLIIMCM", "ICLGELBAJGA");
traceMethod("Root", "GAFNDLIIMCM", "JPIIANCBLAI");
traceMethod("Root", "GAFNDLIIMCM", "OACBMAIGIDA");
traceMethod("Root", "GAFNDLIIMCM", "ODHBBHKHMGH");
traceMethod("Root", "GAFNDLIIMCM", "OKALPILOEKP");
traceMethod("Root", "GAFNDLIIMCM", "PJNFDHKDIKB");
traceMethod("Root", "GBEPOPLFOFB", "BFMJFHDPGOG");
traceMethod("Root", "GCCFLCGJKPO", "ELKAPICCAJC");
traceMethod("Root", "GCCFLCGJKPO", "KILDIFICHDL");
traceMethod("Root", "GCCFLCGJKPO", "ODHBBHKHMGH");
traceMethod("Root", "GJPFIEFCBDN", "FACMFCEGILL");
/* traceMethod("Root", "GMDKDGLDBFM", "AHJHPEAKDHG");
traceMethod("Root", "GMDKDGLDBFM", "BJFEKEOKDJP");
traceMethod("Root", "GMDKDGLDBFM", "BOLDJKBJHGF");
traceMethod("Root", "GMDKDGLDBFM", "CFLONAHCBGK");
traceMethod("Root", "GMDKDGLDBFM", "ENBFHCJPFFI");
traceMethod("Root", "GMDKDGLDBFM", "FEEFEBONDIE");
traceMethod("Root", "GMDKDGLDBFM", "FJHAGPCADPH");
traceMethod("Root", "GMDKDGLDBFM", "HKDHIAIICCL");
traceMethod("Root", "GMDKDGLDBFM", "HLFMLKACLOK");
traceMethod("Root", "GMDKDGLDBFM", "IJBCDBFNELJ");
traceMethod("Root", "GMDKDGLDBFM", "JGNLCEHGBGI");
traceMethod("Root", "GMDKDGLDBFM", "JIMFHDLIJBI");
traceMethod("Root", "GMDKDGLDBFM", "JLOFAJKAGCO");
traceMethod("Root", "GMDKDGLDBFM", "KENLJICCHID");
traceMethod("Root", "GMDKDGLDBFM", "LLACJAPBEEL");
traceMethod("Root", "GMDKDGLDBFM", "MCECNDKPBEE");  // InfoAnim probably: (int, list of objects, hashset)
traceMethod("Root", "GMDKDGLDBFM", "ONCHNJJCNEN");
traceMethod("Root", "GMDKDGLDBFM", "PKKEBOPOGGE"); */
traceMethod("Root", "GNHJFFFMBDL", "ABINBKNNBDE");
traceMethod("Root", "GNHJFFFMBDL", "BOLIOMINLCF");
traceMethod("Root", "GNHJFFFMBDL", "DHFNDNPPCPF");
traceMethod("Root", "GNHJFFFMBDL", "EEDMBAMDNEJ");
traceMethod("Root", "GNHJFFFMBDL", "EJGBDBIGKAJ");  //taking some float values on fight, let's see (float, object, bool, bool, bool)
traceMethod("Root", "GNHJFFFMBDL", "FBKAKBPHIFA");
traceMethod("Root", "GNHJFFFMBDL", "GEBHKKLNJGG");
traceMethod("Root", "GNHJFFFMBDL", "HFLFBAJECEG");
traceMethod("Root", "GNHJFFFMBDL", "IEAEGKLBDCB");
traceMethod("Root", "GNHJFFFMBDL", "JDKJGJBMHCN");
traceMethod("Root", "GNHJFFFMBDL", "JLHOLDFOBBF");
traceMethod("Root", "GNHJFFFMBDL", "KJGAIFGCCFB");
traceMethod("Root", "GNHJFFFMBDL", "KOBCLOEPAIH");
traceMethod("Root", "GNHJFFFMBDL", "LKIECECJFBM");
traceMethod("Root", "GNHJFFFMBDL", "LKMLKOOEEJK");
traceMethod("Root", "GNHJFFFMBDL", "MJLJIGOOMMP");  // registering some movement values: (object, object, Vector3, Vector3, object, Vector3)
traceMethod("Root", "GNHJFFFMBDL", "MNFADLMAIFI");
traceMethod("Root", "GNHJFFFMBDL", "NFMJKHNCBKJ");
traceMethod("Root", "GNHJFFFMBDL", "NKNOKNJKNAG");
traceMethod("Root", "GNHJFFFMBDL", "NLMPIBMLILJ");
traceMethod("Root", "GNHJFFFMBDL", "NOCAOOGHPBP");
traceMethod("Root", "GNHJFFFMBDL", "NPELACBDEGD");
traceMethod("Root", "GNHJFFFMBDL", "OACHCHJDDCL");
traceMethod("Root", "GNHJFFFMBDL", "PDEJLOECGKO");
traceMethod("Root", "GNHJFFFMBDL", "PIMDOPHCMOG");
traceMethod("Root", "HALHHLOPCFI", "EGEKMLOMELD");
traceMethod("Root", "HALHHLOPCFI", "OAMJOPINDAJ");
//HBIGDEKIJDP looks like save file data reader or loader
/* traceMethod("Root", "HBIGDEKIJDP", "FCGLEBIIEDC");
traceMethod("Root", "HBIGDEKIJDP", "FKIGODKHOHE");
traceMethod("Root", "HBIGDEKIJDP", "JHMEHBGHFGP");
traceMethod("Root", "HBIGDEKIJDP", "LMLKDIGNCCI");
traceMethod("Root", "HBIGDEKIJDP", "NGABIDNKIFA");
traceMethod("Root", "HBIGDEKIJDP", "NKILCFGLGLD");
traceMethod("Root", "HBIGDEKIJDP", "OIMEKEOHEHN");
traceMethod("Root", "HBIGDEKIJDP", "OOKNMIDBBGK");
traceMethod("Root", "HBIGDEKIJDP", "OPDLBGLMFON"); */
traceMethod("Root", "MKDEKHEEPPD", "AIIFEKKFCJK");
traceMethod("Root", "HCGKKBENKMB", "GHFMMBEDFGK");
traceMethod("Root", "HCGKKBENKMB", "IPPJDJNPPFL");
traceMethod("Root", "HCGKKBENKMB", "LOCAKHBGEIB");
traceMethod("Root", "HCGKKBENKMB", "OLKNEDNNGEH");
traceMethod("Root", "HGAPPLNBMNF", "OAMJOPINDAJ");
traceMethod("Root", "HNMPIKOECGM", "ACDFGLGGLNG");
traceMethod("Root", "HODHILFFAEI", "CFKBFOCCJMP");
traceMethod("Root", "HODHILFFAEI", "DCHIPNFJKNP");
traceMethod("Root", "HODHILFFAEI", "OAMJOPINDAJ");
traceMethod("Root", "IAEOOODGFAO", "HEMEINDCLIO");
traceMethod("Root", "IAEOOODGFAO", "MNDPGCOOLEB");
traceMethod("Root", "IICFKJFJPLA", "CompareTo");
traceMethod("Root", "IMHADJLJFCG", "CKJOKALHIFI");
traceMethod("Root", "IMHADJLJFCG", "EPJDHGBPPGM");
traceMethod("Root", "IMHADJLJFCG", "OKALPILOEKP");
traceMethod("Root", "IMHADJLJFCG", "PAPPIKHLJEI");
traceMethod("Root", "IOABKBLEMIH", "OAMJOPINDAJ");
traceMethod("Root", "JHENFJACGFE", "GCDIFPKAEEE");
traceMethod("Root", "JJKBCDMFPNJ", "OOLHNIEAEDM");
traceMethod("Root", "JKHNPNDHGOB", "ABHLDKNBDNM");
traceMethod("Root", "JKHNPNDHGOB", "AMHPFBNBIPM");
traceMethod("Root", "JKHNPNDHGOB", "DEANEEKBGJE");
traceMethod("Root", "JKHNPNDHGOB", "EGPEOMPEPFM");
traceMethod("Root", "JKHNPNDHGOB", "GJLFAGDKKGJ");
traceMethod("Root", "JKHNPNDHGOB", "GJPGFALNNJM");
traceMethod("Root", "JKHNPNDHGOB", "HFGMHIJCLJP");
traceMethod("Root", "JKHNPNDHGOB", "HIGNJMKGOOO");
traceMethod("Root", "JKHNPNDHGOB", "IJKANOLDHPF");
traceMethod("Root", "JKHNPNDHGOB", "IMICKDCNBNP");
traceMethod("Root", "JKHNPNDHGOB", "JJDJJBGCINK");
traceMethod("Root", "JKHNPNDHGOB", "MNCLKKIFAAL");
traceMethod("Root", "JNMBJHMPPLB", "CFFKPIDPPAB");
traceMethod("Root", "JNMBJHMPPLB", "LLHHCCINABP");
traceMethod("Root", "JNMBJHMPPLB", "MGHCEBFCAMD");
traceMethod("Root", "JOOEONODJOO", "ILBPHECNHEA");
traceMethod("Root", "LCIMDHBHFFB", "EGEKMLOMELD");
traceMethod("Root", "LDKALFCAKJF", "AOKKBJBHPNM");
traceMethod("Root", "LHLDAKEKDFM", "PJEJGJNPJAO");
traceMethod("Root", "LKMHJJEKIAB", "HPDJMANNIFO");
traceMethod("Root", "LKMHJJEKIAB", "MJLLCIJBIHK");
traceMethod("Root", "LNLFIEFDMKI", "OAMJOPINDAJ");
traceMethod("Root", "LPOFCDNPBPP", "ELACKGOFLEL");
traceMethod("Root", "LPOFCDNPBPP", "OAMJOPINDAJ");
traceMethod("Root", "MBHHANNGDIL", "DNFPBADKKMF");
traceMethod("Root", "MBHHANNGDIL", "HPKHNIONBMJ");
traceMethod("Root", "JOIAIDBPBDH", "BBPPHHLBJGJ");
traceMethod("Root", "NGAGMDHMGMM", "JLEBAEFLAIM");
traceMethod("Root", "NHAPFAAGDKH", "LFJHPNHKBKK");
traceMethod("Root", "NHAPFAAGDKH", "LJLBNPDALFC");
traceMethod("Root", "NKAHADFCNGM", "PBNHPJAFCCJ");
traceMethod("Root", "NLAMBPCJBMG", "ABIDOIKABMK");
traceMethod("Root", "NLAMBPCJBMG", "AELEAJJPDJK");
traceMethod("Root", "NLAMBPCJBMG", "CABLKGAEBLC");
traceMethod("Root", "NLAMBPCJBMG", "FHIPMLGDNJG");
traceMethod("Root", "NLAMBPCJBMG", "GMFIKMHCJBO");
traceMethod("Root", "NLAMBPCJBMG", "HKEMKOGBBJG");
traceMethod("Root", "NLAMBPCJBMG", "HPMBLJAPLLI");
traceMethod("Root", "NLAMBPCJBMG", "KJBKIEDODGO");
traceMethod("Root", "NNCACOHLFKJ", "PDEFKONJJHP");
traceMethod("Root", "", "FMONLIJFMHP");
traceMethod("Root", "EnchantDialog", "HGOGFFEFAFD");
traceMethod("Root", "EnchantDialog", "HNDHIGCNJDN");
traceMethod("Root", "RaidPlayersRoll", "JOFNPFGGOEE");
traceMethod("Root", "ShowLootDialog", "EHJGKBMNHMH");
traceMethod("Root", "FMFFMNPBMFG", "OHOEOHCMLFD");
traceMethod("Root", "CurrencyReward", "setIcon");
traceMethod("Root", "PlayerLifeBar", "FPKDMOGDKAK");
traceMethod("Root", "PlayerLifeBar", "MDFHOLFEJNA");
traceMethod("Root", "PreFight", "IsTimeOut");
traceMethod("Root", "PreFight", "get");
traceMethod("Root", "ResistanceContent", "Init");
traceMethod("Root", "RewardPanel", "Init");
traceMethod("Root", "ScreenFight", "PreInit");
traceMethod("Root", "ScreenModel", "DJKEOKPEKNI");
traceMethod("Root", "ViewerFight", "FHPFEACGLKM");
traceMethod("Root", "ViewerFight", "SetTimerForLastRaidRound");
traceMethod("Root", "MaterialPriceUI", "Refresh");
traceMethod("Root", "RecipePriceUI", "get");
traceMethod("Root", "RecipePropertiesUI", "DFPHBENMKLD");
traceMethod("Root", "RecipeUI", "BIPKDIKHBJM");
traceMethod("Root", "ParametersPanel", "DCPDPNECOML");
traceMethod("Root", "PropertiesPerksPanel", "DCPDPNECOML");
traceMethod("Root", "OCBAHIHDLLI", "AOLKPHPMMCJ");
traceMethod("Root", "OCBAHIHDLLI", "GGFIIIHDKLE");
traceMethod("Root", "OCBAHIHDLLI", "LABDJPFKMDM");
traceMethod("Root", "OCBAHIHDLLI", "ODEPOPMHOHE");
traceMethod("Root", "OCBAHIHDLLI", "PNEJICAEFGM");
traceMethod("Root", "ODINKFAKNIF", "BGOJHEFEIHB");
traceMethod("Root", "ODINKFAKNIF", "HKIFNOEKIII");
traceMethod("Root", "ODINKFAKNIF", "IGDNNDJEMAE");
traceMethod("Root", "ODINKFAKNIF", "JKDEIMOGFOA");
traceMethod("Root", "ODINKFAKNIF", "PMDFBDNBKJM");
traceMethod("Root", "OGMANJFCOLB", "ELKOELNDGEB");
traceMethod("Root", "OHNMLEMFMDO", "MJLLCIJBIHK");
traceMethod("Root", "OOHNBGIMGFJ", "BMBJAGNOEFM");
traceMethod("Root", "OOHNBGIMGFJ", "GPLGALBKJFG");
traceMethod("Root", "OOHNBGIMGFJ", "MJPFHJANCFC");
traceMethod("Root", "PFGKFMLPCDC", "JELNJAGHNCA");
traceMethod("Root", "PFGKFMLPCDC", "LIBOLEPKDIO");
traceMethod("Root", "PLBPPCNGLGA", "BIHJAGGECFE");
traceMethod("Root", "PLBPPCNGLGA", "JHINEJPLIJH");
traceMethod("Root", "PLLJBMBABBD", "NBDAFOICDOL");
traceMethod("Root", "PPABPKMFCOL", "EINGEKIOCIK");
traceMethod("Root", "PPABPKMFCOL", "OAMJOPINDAJ");
traceMethod("Root", "PPLNCPJDPFP", "CFKBFOCCJMP");
traceMethod("Root", "RaidInfo", "UpdateInfo");
}

function AllObscureIntHandler(){
    // traceMethod("Root", "OHNMLEMFMDO", "MJLLCIJBIHK");
    getMethod("Root", "OHNMLEMFMDO", INT_PRE_SET_METHOD_NAME).implementation = function(...args: any[]):boolean{
        const [what, refInt, bool1, bool2] = args;
        // if(!what.toLowerCase().includes("RegenerationRate")){
        const isRegenerationRate = what.content?.includes("RegenerationRate");

        const result = this.method<boolean>(INT_PRE_SET_METHOD_NAME).invoke(what, refInt, bool1, bool2) as boolean;
        if (!isRegenerationRate) {

            // console.log("Type:", typeof refInt);
            // console.log("Value:", refInt);
            // console.log("Constructor:", refInt?.constructor?.name);
            // console.log("Keys:", Object.keys(refInt));

            // const value = refInt.handle.readS32();
            
            // console.log("MJLLCIJBIHK called with what: " + what + ", refInt: " + value);
        }
        // if(what.content?.includes("EnchantmentResistance")){
        //     refInt.handle.writeS32(100000);
        // }
        // if(what.content?.includes("ShockCriticalHitChance")){
        //     refInt.handle.writeS32(100000);
        // }
        // if(what.content?.includes("WeaponDamage")){
        //     const originalWeaponDamage = refInt.handle.readS32();
        //     console.log("WeaponDamage : " + originalWeaponDamage);
        //     const multipliedWeaponDamage = originalWeaponDamage * 2;
        //     console.log("MultipliedWeaponDamage : " + multipliedWeaponDamage);
        //     refInt.handle.writeS32(multipliedWeaponDamage);
        // }
        // if(what.content?.includes("BodyDefense")){
        //     refInt.handle.writeS32(100000);
        // }
        // if(what.content?.includes("CriticalChance")){
        //     refInt.handle.writeS32(100000);
        // }
        // if(what.content?.includes("CriticalDamage")){
        //     refInt.handle.writeS32(100000);
        // }
        return result;
    }
}

function InstantMagicRecharge(){
    // backtraceMethod("Root", "GNHJFFFMBDL", "MAGIC_CHARGE_METHOD_NAME" );  
    getMethod("Root", "GNHJFFFMBDL", MAGIC_CHARGE_METHOD_NAME).implementation = function(...args: any[]){
        const [param1] = args;
        // console.log("MAGIC_CHARGE_METHOD_NAME called with param1: " + param1);
        this.method(MAGIC_CHARGE_METHOD_NAME).invoke(1.0);
    }
}

// #region Old Code
function oldCode(){
// traceClass("Firstpass","Unity.IO.Compression.FastEncoderWindow");

    // traceClass("BouncyCastle.Crypto","Org.BouncyCastle.Crypto.Signers.Ed25519Signer");
    // traceAssembly("BouncyCastle.Crypto");

    //XML Wrapper
    // traceClass("Newtonsoft.Json", "Newtonsoft.Json.Converters.XmlDocumentWrapper");

    // SUspect 1 : AOBEBIIMHEK
    // traceClass("Root","AOBEBIIMHEK");
    // traceMethod("Root","AOBEBIIMHEK","CKFFEIDACBK");
    // traceMethod("Root","AOBEBIIMHEK","JAFENCCMLLF");

    // SUspect 2 : 
    // traceClass("Root","DODLLIIKCDJ");
    // traceMethod("Root","DODLLIIKCDJ", "DPOKOCHICMG");   //xmldoc with some class
    // traceMethod("Root","DODLLIIKCDJ", "HGMAPENOPCP");   //string, xmldoc
    // traceMethod("Root","DODLLIIKCDJ", "GIPDLCLCKGA");   //bool: string, class
    // traceMethod("Root","DODLLIIKCDJ", "OELBMJOPPAN");   //return bool: xmlnode, string
    // traceMethod("Root","DODLLIIKCDJ", "PJDOMPJLLPK");   //return xmlnode: xmlnode

    // Add Unity UI Slider value change interceptor
    // traceUnityUISliderValueChanges();

    // traceClass("UnityEngine.UI","UnityEngine.UI.Slider");
    // traceClass("Root","Nekki.SF2.GUI.Dialogs.Raids.Clans.BattleRaidSlider");
    // traceClass("Unity.TextMeshPro","TMPro.TMP_Text");
    // traceClass("UnityEngine.UI","UnityEngine.UI.Text");
    // traceMethod("UnityEngine.UI","UnityEngine.UI.Text", "set_text");

    // traceClass("Root", "Nekki.SF2.GUI.LabelAlias");
    // traceClass("Root", "Nekki.SF2.GUI.GeneralMenu.MenuItemSlider");

    //Let's try tracing buttons
    // traceClass("Root", "Nekki.SF2.Core.Fights.Controls.ActionButtons");

    // const magicButtonMethod = getMethod("Root", "Nekki.SF2.Core.Fights.Controls.ActionButtons", "SetNeededPercentageToActBtn");
    // installBacktraceForMethod(magicButtonMethod);
    // backtraceMethod("Root", "Nekki.SF2.Core.Fights.Controls.ActionButtons", "SetNeededPercentageToActBtn");

    // traceMethod("Root", "Nekki.SF2.Core.Fights.Controls.GameController", "get_IsMagicEnabled");
    // traceClass("Root", "Nekki.SF2.Core.Fights.Controls.GameController");
    // traceMethod("Root", "Nekki.SF2.Core.Fights.Controls.GameController", "KIKCJMOAOLA");
    
    // traceClass("Root","Nekki.SF2.GUI.ProgressButton");
    // const m = getMethod("Root","Nekki.SF2.GUI.ProgressButton", "MPDKAKBBAGF");
    // m.implementation = function(param1:number):void{
        //     console.log("MPDKAKBBAGF called with magic: " + param1);
        //     this.method("MPDKAKBBAGF").invoke(100);
        // }

    // const m = getMethod("Root","Nekki.SF2.Core.Fights.Controls.ActionButtons", "SetNeededPercentageToActBtn");
    // installBacktraceForMethod(m);
    // backtraceMethod("Root","Nekki.SF2.Core.Fights.Controls.GameController", "NCMGMELCANA");

    // backtraceMethod("Root","GNHJFFFMBDL", "GEBHKKLNJGG");
    // installNumericFieldPrinterOnMethod("Root","GNHJFFFMBDL", "HIGNJMKGOOO");
    // installNumericFieldPrinterOnMethod("Root","ODINKFAKNIF", "FFOCPOLIBDC");
}
// #endregion

//#region Helper Functions

function backtrace(assemblyName:string,className:string,methodName:string):void{
    Il2Cpp.backtrace().verbose(true)
        .assemblies(Il2Cpp.domain.assembly(assemblyName))
        .filterClasses(clazz => clazz.name.includes(className))
        .filterMethods(method => method.name.toLowerCase().includes(methodName.toLowerCase()))
        .and().attach();
}

function getAssembly(assemblyName:string): Il2Cpp.Assembly{
    return Il2Cpp.domain.assembly(assemblyName);
}

function getClass(assemblyName:string,className:string):Il2Cpp.Class{
    const assembly = Il2Cpp.domain.assembly(assemblyName).image;
    const resultClass = assembly.class(className);
    return resultClass;
}

function getMethod(assemblyName:string,className:string,methodName:string):Il2Cpp.Method{
    const targetClass = getClass(assemblyName,className);
    const targetMethod = targetClass.method(methodName);
    return targetMethod;
}

function traceAssembly(assemblyName:string):void{
    Il2Cpp.trace(true).assemblies(getAssembly(assemblyName)).and().attach();
}

function traceMethod(assemblyName:string,className:string,methodName:string):void{
    Il2Cpp.trace(true).methods(getMethod(assemblyName, className, methodName)).and().attach();
}

function traceClass(assemblyName:string,className:string):void{
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

function backtraceAssembly(assemblyName:string, mode?: any):void{
    Il2Cpp.backtrace(mode).assemblies(getAssembly(assemblyName)).and().attach();
}

function backtraceClass(assemblyName:string,className:string, mode?: any):void{
    Il2Cpp.backtrace(mode).classes(getClass(assemblyName, className)).and().attach();
}

function backtraceMethod(assemblyName:string,className:string,methodName:string, mode?: any):void{
    Il2Cpp.backtrace(mode).methods(getMethod(assemblyName, className, methodName)).and().attach();
}

function installBacktraceForMethod(method: Il2Cpp.Method, mode?: any): void{
    Il2Cpp.backtrace(mode).methods(method).and().attach();
}

function printBoolean(variable:Il2Cpp.Object, variableName:string):void{
    var result = variable.field(variableName).value as Boolean;
    console.log(variableName + " : " + result);
}

function setBoolean(variable:Il2Cpp.Object, variableName:string, value:boolean):void{
    variable.field(variableName).value = value;
}
//#endregion

