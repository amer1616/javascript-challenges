// shift string character one

function alphabetShift(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  // console.log(alphabet);
  let inputShifted = str.split("");
  // itrerate over inputShifted.
  for (let i = 0; i < inputShifted.length; i++) {
    let index = 0;
    // check if any elem in inputShifted is not 'z'
    if (inputShifted[i] !== "z") {
      // get index in alphabet of inputShifted[i]. then shift it one character ahead by adding one.
      index = alphabet.indexOf(inputShifted[i]) + 1;
      console.log(index);
    }
    //set that iterated element to that of alphabet index
    inputShifted[i] = alphabet[index];
  }
  // inputShifted.map((c, i) => {
  //   //console.log(c, i);
  //   let index = 0;
  //   if (c !== "z") {
  //     index = alphabet.indexOf(c);
  //     console.log(index);
  //   }
  //   c = alphabet[index + 1];

  //   console.log(c);
  // });
  // return the array inputShifted in string
  return inputShifted.join("");
}

console.log(alphabetShift("crazy"));
