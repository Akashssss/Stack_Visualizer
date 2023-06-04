import { parseFunction } from "./Utility/parseFunction.mjs"
import { userFunctionInfo } from "./Utility/UserFunctionInfo.mjs"




export const functionRunner = (code  , functionCall)=>{
  
const match  = userFunctionInfo(functionCall) ;


let obj ;
if( match )
{
    obj = parseFunction(code, match[1]); 
    console.log( obj ) ; 

}

return obj  ; }



