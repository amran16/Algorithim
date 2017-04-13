function longestWord(string){

  var str = string.split(' ');

  var longest = '';

  for(var i = 0; i < str.length; i++){
    if(str[i].length > longest){
      longest = str[i];
    }
    //console.log(str[i].length);
  }
   return longest;
}

console.log('The longest word is: ', longestWord('abcda one'));
console.log('The longest word is: ', longestWord('one'));
console.log('The longest word is: ', longestWord('Berkeley is nice'));
