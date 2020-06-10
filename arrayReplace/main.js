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

console.log(arrayReplace([1, 2, 1], 1, 3));
