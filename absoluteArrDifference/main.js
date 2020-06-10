// get the maximum absolute diffence between the maximum number and the minimum num in arr
// example : [1,4,0,2] - the answer is: 3

function arrayMaximalAbsoluteDiff(arr) {
  let maxDiff = Math.abs(arr[0] - arr[1]); // initial value will be the difference b/w first and second members of arr
  console.log(maxDiff);

  for (let i = 0; i < arr.length; i++) {
    // checking the difference b/w the current member and the previous one
    let absoluteDiff = Math.abs(arr[i - 1] - arr[i]);
    console.log(absoluteDiff);
    // compare between maxDiff & absoluteDiff, return which one of them is higher
    maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
  }

  return maxDiff;
}

console.log(arrayMaximalAbsoluteDiff([1, 4, 0, 8]));
