// Given array integers, replace all occurences of elemToReplace with substitutionElem
// example: inputArray = [1,3,1]; elemToReplace = 1; substitutionElem = 3; so output= [3,3,3]

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  inputArray.map((elem, i) => {
    if (elem === elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  });
  return inputArray;
}

function swapArrElem(arr, firstIndToSwap, secondIndToSwap) {
  let temp = arr[firstIndToSwap];
  arr[firstIndToSwap] = arr[secondIndToSwap];
  arr[secondIndToSwap] = temp;

  // es6 solution
  // [arr[firstIndToSwap], arr[secondIndToSwap]] = [
  //   arr[secondIndToSwap],
  //   arr[firstIndToSwap],
  // ];
  return arr;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
console.log(swapArrElem([2, 4, 6, 9], 1, 3));
