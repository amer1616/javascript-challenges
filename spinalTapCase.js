// spinal tap case: convert str to spinal case, all-lower-cases-joined-by-dashes

function toSpinalTap(str) {
  // selecting the space between 2 matches, small & capital letters. inserted with 2 replacement, separated by dash
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+|_+/g, "-")
    .toLowerCase();
  // second to replace any space or low dash
}

console.log(toSpinalTap("toSpnalCanal is yours dear"));
