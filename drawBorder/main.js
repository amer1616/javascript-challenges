/**
 * 
 * Draw border of '*****' at the begging and at the end of array ~ ['*****', 'abc', 'def', '*****']
 * then wrap "*" around each elem in array
 @param {*} picture
**/
const addBorder = (picture) => {
  // getting length of elem in array and adding 2
  const pictureElemLen = picture[0].length + 2;
  //console.log(pictureElemLen);
  // repeating '*' with the same pictureElemLen length
  const wall = "*".repeat(pictureElemLen);
  // adding wall at the beggining & at the end of array
  picture.unshift(wall);
  picture.push(wall);
  // wrap "*" around each elem in array
  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }
  return picture;
};

console.log(addBorder(["abc", "efg"]));
