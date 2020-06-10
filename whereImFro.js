// where im from : check if each obj key and value of source obj exist in each key/value of the array obj

function whereImFro(collection, source) {
  // extract keys of source obj
  let keys = Object.keys(source);

  return collection.filter(function (obj) {
    // iteration over keys of source obj
    for (var key of keys) {
      // check for each obj in collection has key or key:value of source obj, if doesn't exist return false else return true
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });

  // es6 solution
  Object.keys(source).every(
    (key) => collection.hasOwnProperty(key) && collection[key] === source[key]
  );
}

console.log(whereImFro([{ 1: 2 }, { 2: 4 }], { 1: 2 }));
