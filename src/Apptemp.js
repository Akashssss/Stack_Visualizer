const name = call.substring(0, call.indexOf('(')).trim();
const passedArgs = call.substring(call.indexOf('(')).trim();
def = def.replace(/\s+(?=\()/g, "");
let firstIDX = def.indexOf(`${name}(`);
firstIDX = def.indexOf(")", firstIDX);

let { openingBracketIndex, closingBracketIndex, } = findBracketsIndices(def, firstIDX);

const SubData = def.slice(openingBracketIndex, closingBracketIndex);


const newSubData = subString1 + SubData + subString2;
var temperory_tree = tree;
// console.log(def)
def = def.substring(0, openingBracketIndex + 1) + newSubData + def.substring(closingBracketIndex);
// console.log(def)
const a = eval("(" + def + ")");
// console.log(a)
eval("a" + passedArgs)
// console.log(call)




