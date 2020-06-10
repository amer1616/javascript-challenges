// Inventory update: Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item

function updInventory (arr1, arr2){
	// create inventory array
	let newArr=[];
	let inventory = arr1.concat(arr2).reduce(function (acc, curr){
		//composing new single obj with key[value] pair using reduce func returning a new obj
		 //check if the 2nd elem of array exist, add it as a key to value, 1st elem, of the new obj
		 if(acc[curr[1]]){
		 	acc[curr[1]] += curr[0];
		 } else {
		 	acc[curr[1]] = curr[0];
		 }
		 
		return acc;
	}, {} );
	
	// converting into array of keys w/ Object.keys(), so we can sort it alphabetically with .sort(). then mapping the keys to return the sorted array of key: value pair
	return Object.keys(inventory).sort().map(function (val){
		return [inventory [val], val]
	});
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]];


console.log(updInventory(curInv, newInv))

