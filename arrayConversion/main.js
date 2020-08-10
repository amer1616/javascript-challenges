// for each 2 odd numbers in sequence in array add 2 consecutive values together.
// else multiply each 2 even numbers together . then get the sum of all values into single value
// example [1, 2, 3, 4, 5, 6, 7, 8] will be converted into 186

function arrConversion(arr) {
  // using while loop
  let isOdd = true;

  while (arr.length !== 1) {
    arr = someProduct(arr, isOdd);
    console.log(arr);
    isOdd = !isOdd; // created
  }
  console.log(arr);

  return arr[0];
}

function someProduct(numArr, isOdd) {
  let someProducts = [];
  if (isOdd) {
    for (let i = 0; i < numArr.length; i += 2) {
      someProducts.push(numArr[i] + numArr[i + 1]);
    }
  } else {
    for (let i = 0; i < numArr.length; i += 2) {
      someProducts.push(numArr[i] * numArr[i + 1]);
    }
  }

  return someProducts;
}

console.log(arrConversion([1, 2, 3, 4, 5, 6, 7, 8]));
