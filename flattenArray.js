// Flatten deep nested arrays: by using recursion

function steamrollArray(arr) {
  // create new array to store the output
  const newArr = [];
  // function to iterate over arr, and check
  function flatten(arr) {
    arr.map(function (item) {
      if (!Array.isArray(item)) {
        newArr.push(item);
      } else {
        // recursive function
        flatten(item);
      }
    });
  }
  flatten(arr);
  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
