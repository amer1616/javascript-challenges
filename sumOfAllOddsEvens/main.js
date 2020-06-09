// get the sum of all odds and even numbers in array

function sumOfAllEvensOdds(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  return [evenSum, oddSum];
}

console.log(sumOfAllEvensOdds([4, 20, 13, 9, 11, 14, 17]));
