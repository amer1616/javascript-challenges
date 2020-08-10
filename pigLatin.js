// Pig Latin: takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
  // regex: offer any of the following  consonant letters with case insensitive
  const regex = /^[BCDFGHJKLMNPQRSTVXZWY]+/i;

  const match = str.match(regex);

  // check if matching, take the first letter with its length, add it to the end. then add 'ay'
  if (match) {
    return str.slice(match[0].length) + match[0] + "ay";
  }
  return str + "way";
}
