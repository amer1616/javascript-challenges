// sum all numbers in range of array elements

function sumOfAllNum(arr){
	let start = Math.max(arr[0], arr[1]);
	let end = Math.min(arr[0], arr[1]);
	let total= 0;
	
	for (let i = start; i <= end; i++){
		total += i;
	}
	
	return total;
}

console.log(sumOfAllNum([2,5]));
