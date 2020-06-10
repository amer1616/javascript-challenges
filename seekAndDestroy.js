// seek and destroy: look for any args provided. define args that not array. check if these args included in that array elements, take it out of new array creatrd

function seekNdestroy(arr) {
  //convert all args into one MD arr. Then extract the second args, start from index 1,
  let result = [];
  //const args = [... arr].splice(1); es6
  const args = Array.from(arguments);
  const targets = args.splice(1);
  //console.log(arr);

  // filter out those args that dont exist in targets
  /*
	for (let num of arr){
		if (targets.indexOf(num) === -1){
			result.push(num);
		}
	}
	
	return result;
	*/

  // by using filter method
  return arr.filter(function (num) {
    return !targets.includes(num);
  });
}

console.log(seekNdestroy([2, 5, 3, 5, 7], 2, 3, 7));
