// if the array length is not even, get the median value of array .otherwisw if even get the value before
function absoluteValSumMinimization(a = []) {
  const isEven = a.length % 2 === 0;
  console.log(Math.floor(a.length / 2));
  console.log(a.length / 2 - 1);

  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValSumMinimization([2, 4, 5]));
console.log(absoluteValSumMinimization([2, 4, 5, 7]));
console.log(absoluteValSumMinimization([2, 4, 5, 8, 12]));
// console.log(absoluteValSumMinimization([2, 4, 5, 9, 16, 18, 11]));
