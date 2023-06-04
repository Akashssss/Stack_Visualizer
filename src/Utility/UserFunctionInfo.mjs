export function userFunctionInfo(userFunctionCall)
{
    const userFunctionRegex = /^(\w+)\((.*)\)$/;
    const match = userFunctionCall.match(userFunctionRegex);

     return match ; 
} 