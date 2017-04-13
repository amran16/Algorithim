function  palindrome(str){

  str = str.toLowerCase()

  for(var i = 0; i < str.length; i++){
     if( str[i] === str[str.length -1]){
          return true;
     }
     return false;
  }

}

console.log(palindrome('mom'));
console.log(palindrome('car'));
console.log(palindrome('racecar'));
console.log(palindrome('abc'));
console.log(palindrome('abcba'));
console.log(palindrome('never odd or even'));
console.log(palindrome('A man, a plan, a canal. Panama'));
