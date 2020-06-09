function addSum(...params) {
  // let total = 0;
  // params.map((num) => (total += num));
  // return total;

  // another solutin by using arr.reudce()
  return params.reduce((total, num) => total + num);
}

// add 2 sums of number provided
function addTowDigits(num) {
  const nums = num.toString().split(""); // convert number to array of numbers. but u have to convert to string first in order to use .split()
  return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addSum(3, 5, 6));
console.log(addTowDigits(29));
