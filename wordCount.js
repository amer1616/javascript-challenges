// word count within string, 

const wordCount= str => str.split(" ").reduce((count, word) =>{
	 count[word] = count.hasOwnProperty(word)? count[word] + 1 : 1;
	 return count;
},{} )


console.log(wordCount('hello mr mohammad is you name hello'))

//find the longest word
const findTheLongestWord = str => str.split(" ").sort((a, b) => b.length- a.length)[0];

console.log(findTheLongestWord('hello mr mohammad is you name hello'))
