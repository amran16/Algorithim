function capitalize_words(string){

  var str = string.toLowerCase().split(' ');

  for(var i = 0; i < str.length; i++){
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
       //console.log(str[i].slice(1))

      //  letters = str[i].split('');
      //  letters[0] = letters[0].toUpperCase();
      //  str[i] = letters.join('');
  }
   return str.join(' ')
}

console.log(capitalize_words('this is a sentence')) //This Is A Sentence
console.log(capitalize_words('mike bloomField')) //Mike Bloomfield
