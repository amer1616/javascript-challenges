// return the longest string in array
function longestStringInArr(arr) {
  let longestLength = 0;
  let longestWords = [];
  // iterate over arr to get the longest word in arr & store it in longestLength
  arr.map((word) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });
  console.log(longestLength);

  // push that longest word into longestWords
  arr.map((word) => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });
  return longestWords;
}

console.log(longestStringInArr(["abc", "asas", "sd", "asdsa", "asddff"]));
