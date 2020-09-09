// missing letters: check if any letters in range is missing in str

function missingLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  //console.log(alphabet);
  str = str.split("");
  // check if first letter not started with 'a'
  if (str[0] != "a") {
    return undefined;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] != alphabet[i]) {
      return alphabet[i];
    }
  }
}

console.log(missingLetter("xyz"));
