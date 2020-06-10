// compare btw 2 given array, check  each elem exists in the other, if not return that element

function diffArr (arr1, arr2) {
	// concat both arrays
	const combo = arr1.concat(arr2); // [...arr1, ...arr2]
	//console.log(combo)
	return combo.filter(function (num) {
		// check if num doesnt exist in both arrays; return that num in new filtered array
		if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
			return num;
		}
		//or if(!arr1.includes(num) || !arr2.includes(num)) return num
	})
}

console.log(diffArr([1, 3, 4], [1, 2, 4, 6]))
