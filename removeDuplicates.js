let list = [2, 3, 4, 2, 6, 7, 3, 8, 1, null, false, {}];

// using filter, iterating over each item of arr to check if current index of iterator equal index of item,
function unique(arr) {
  return arr.filter(function (item, index, self) {
    return index === self.indexOf(item); // iterate over each item in arr, to keep only item with similar index
  });
}
// another<solution
function removeDup(arr) {
  let out = [];
  let cObj = {};

  for (let i = 0; i < arr.length; i++) {
    cObj[arr[i]] = 0;
  }
  for (x in cObj) {
    out.push(x);
  }

  return out;
}
// remove null values from arr
function removeNull(arr) {
  return arr.filter(Boolean);
}

console.log(unique(list));
console.log(removeNull(list));
