// search and replace before with after in provided string. preserve title case

function searchReplace(str, before, after){
	// check if first letter is capitalized in before, capitalize first letter in after
	if (before[0] === before[0].toUpperCase()){
		after = after[0].toUpperCase() + after.slice(1);
	}
	
	return str.replace(before, after);
}