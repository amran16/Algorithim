function reverse(str){

  var reversed = '';

  for(var i = 0; i < str.length; i++){
    reversed = str[i] + reversed ;
  }

   return reversed;

  //return str.split('').reverse().join('');
}
console.log(reverse('react'));
console.log(reverse('Greetings from Earth'));
console.log(reverse('computer'));
