// check if more than tow values in array are in increasing sequence. meaning [2,4,6,3]

function isInSequence(sequence) {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    // check if the item before is less or equal, so increase the count by one
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      // check if 2 items before the current item are increasing
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1] // check the one item before the current is increasing
      ) {
        return false;
      }
    }
  }
  console.log(count);

  return count <= 1; // passing the evaluation if one or less count is in increasing sequence; not passing if tow or more counted values are in sequence
}

console.log(isInSequence([3, 5, 7, 8]));
// console.log(isInSequence([3, 5, 1, 1]));
