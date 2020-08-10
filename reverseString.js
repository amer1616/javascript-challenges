// reverse string

function reverseStr(str) {
  // Solution 1: using for loop
  // let result = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   result += str[i];
  // }
  // return result;
  //Solution 2: using recursion
  // if (str === "") {
  //   return "";
  // } else {
  //   return reverseStr(str.slice(1)) + str[0];
  // }

  // Solution 3: using .reduce()
  // return str.split("").reduce((str, acc) => (acc += str), "");
  // es6 solution
  return [...str].reduce((acc, char) => (acc += char), "");
}

console.log(reverseStr("sammy mohammad"));
// console.log(reverseStr("Jimmy"));
