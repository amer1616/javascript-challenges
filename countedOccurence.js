// count occurence of number in array

const countedOccurence=arr=> {
	return arr.reduce((acc, val)=>{
	// check if 
		if (val in acc){
			acc[val]++;
		}else{
			acc[val]= 1;
		}
		
		return acc;// acc is accumulated object
	}, {})
}

let a= [2,4,5,2, 3, 7, 9, 5, 7];
console.log(countedOccurence(a));

