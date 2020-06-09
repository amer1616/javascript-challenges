// get the larget product between 2 adjacent numbers in array
function addAdjacentElemProduct(nums) {
  let largestProduct = nums[0] * nums[1];

  for (let i = 1; i < nums.length - 1; i++) {
    let product = nums[i] * nums[i + 1];
    largestProduct = largestProduct < product ? product : largestProduct;
  }
  return largestProduct;
}

console.log(addAdjacentElemProduct([3, 25, -9, 2, 7, 8]));
