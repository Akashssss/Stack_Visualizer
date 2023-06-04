export function findBracketsIndices(string, startIndex) {
    var stack = [];

    for (var i = startIndex; i < string.length; i++) {
        if (string[i] === "{") {
            stack.push(i);
        } else if (string[i] === "}") {
            if (stack.length === 1) {
                return {
                    openingBracketIndex: stack[0],
                    closingBracketIndex: i
                };
            }
            stack.pop();
        }
    }
    // If matching brackets not found
    return null;
}


export const subString1 = `temperory_tree = temperory_tree.createChildNode(a.name );
temperory_tree.arguments = Array.from(arguments);
try {\n`;
export const subString2 = `\n }
finally {
temperory_tree = temperory_tree.parentNode ;
}`;
