// find the largest number in array
// longest solution


//shortest solution, es6

const findLargestNum = (arr) => arr.map(x => Math.max(...x)).join(", ");


let ar= [[3,8,22], [56,122,80], [31,111]]
console.log(findLargestNum(ar))
