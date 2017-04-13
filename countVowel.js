function countVowel(string){

  var vowels = string.match(/[aeiou]/g);

  return (vowels === null) ? 0 : vowels.length

}
console.log(countVowel('colorou'));
console.log(countVowel('cage'));
console.log(countVowel('fly'));
