// html entity converter: convert any character '<', '>', '&', '', ', in the string into the corresponding html entity

function convertHtml(str){
	
	// html entities obj
	let entities = { '&':'&amp;', '<':'&lt;', '>':'&​gt;', '"':'&​quot;', "'":'&​apos;' }
	
	return str.split(' ').map(char => entities [char] || char).join('')
	
}

console.log(convertHtml('Dolce & Gabana'));
