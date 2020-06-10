// convert Roman numbers to numerals

function romanToNums(num){
	// romans to Nums obj
	 const romanToNum = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
	 
	 let roman = ' ';
	 for (let key in  romanToNum){
	 	console.log(key);
	 	//check if num 
	 	while (num >= romanToNum[key]){
	 		roman += key;
	 		num -= romanToNum[key];
	 		console.log('Num is decreased ' + num)
	 	}
	 }
	 return roman;
}

console.log(romanToNums(3));

