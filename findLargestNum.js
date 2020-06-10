// find the largest number in array
// longest solution

//shortest solution, es6

const findLargestNum = (arr) => arr.map((x) => Math.max(...x)).join(", ");

let arr = [
  [3, 8, 22],
  [56, 122, 80],
  [31, 111],
];
console.log(findLargestNum(arr));
