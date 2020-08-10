// Caesars Cipher: shifting ascii codes 13 fields, so decoding capital letters

function rot13(str) {
  let asciiNum,
    solved = " ";
  for (let i = 0; i < str.length; i++) {
    asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      solved += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      solved += String.fromCharCode(asciiNum - 13);
    } else {
      solved += str[i];
    }
  }
  return solved;
}

console.log(rot13("V"));
