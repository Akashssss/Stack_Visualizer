function extractFunction(functionName, code) {
    const regex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`);
    const match = code.match(regex);
    if (match) {
        const start = match.index + match[0].length;
        let count = 1;
        let end = start;
        while (count > 0 && end < code.length) {
            if (code[end] === '{') count++;
            else if (code[end] === '}') count--;
            end++;
        } if (count === 0) {
            // Check if the last character is '}' and exclude it
            if (code[end - 1] === '}') {
                end--;
            }
            if (count === 0) {
                return code.substring(start, end);
            }
        }
        return '';
    }
}











export function parseFunction(code, functionName) {
    const functionRegex = /function\s+([\w$]+)\s*\(([^)]*)\)\s*{/g;
    const functionMatches = code.matchAll(functionRegex);
    const functionDeclarations = [];
    for (const match of functionMatches) {
        const functionName = match[1].trim();
        const functionArguments = match[2].split(',').map(arg => arg.trim()).join(', ');
        const functionCode = extractFunction(functionName, code);

        const functionDeclaration = `${functionName}(${functionArguments})`;
        functionDeclarations.push({ declaration: functionDeclaration, code: functionCode });
    }

    const userFunctionRegex = /^(\w+)\((.*)\)$/;
    let newObj = {
        utilityFunctions: [],
        userFunction: []
    }





    

    for (let func of functionDeclarations) {

        const nam = func.declaration.match(userFunctionRegex)[1].trim();
    
        const subString1 = `temperory_tree = temperory_tree.createChildNode( "${nam}" );
temperory_tree.arguments = Array.from(arguments);
try {\n`;
        const subString2 = `\n }
finally {
temperory_tree = temperory_tree.parentNode ;
}`;


        func.code = `${subString1}${func.code}${subString2}`;
        if (nam === functionName) {
            newObj.userFunction.push(func);
        }
        else{
            newObj.utilityFunctions.push(func);
        }
    }
    return newObj;

}





