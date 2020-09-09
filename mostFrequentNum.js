// find the most frequent item in arr

function mostFreq(arr) {
  // create object to count occurrence of item inside arr
  let counts = {};
  // compare using stored value
  let compare = 0;
  let mostFreqItem; // to store most freq here

  // looping thru arr to create counts obj
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    // check if obj prop exist, meaning
    if (counts[item]) {
      // increase existing value by 1
      counts[item] = counts[item] + 1;
    } else {
      //set count[item] value to 1
      counts[item] = 1;
    }

    if (counts[item] > compare) {
      // if counts[item] > 0 (first time)
      compare = counts[item];
      mostFreqItem = arr[i];
    }
  }
  return mostFreqItem;
}

console.log(mostFreq([2, 3, 5, 2, 7, 8, 12]));
