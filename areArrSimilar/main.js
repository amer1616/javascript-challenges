// check if both arrays having similar members, not necessary in the same sequence
function areArrSimilar(arr1, arr2) {
  if (arr1.length === arr2.length) {
    if (arr1.sort().join(",") === arr2.sort().join(",")) {
      return true;
    }
  }
  return false;
}

// check array changes needed to

// console.log(areArrSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areArrSimilar([1, 3, 2], [2, 1, 3]));
// console.log(areArrSimilar([1, 6, 3, 2], [2, 1, 3, 6]));
// console.log(areArrSimilar([1, 2], [1, 2, 3]));
