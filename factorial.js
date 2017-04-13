function factorial(n){

  if(n < 0 ) return 'does not exist';

  if(n === 0 || n === 1) return 1;

  var x = 1;

  // while(n > 0){
  //   x = x * n;
  //   n--;
  // }

  for(var i = 1; i <= n; i++){
      x *= i
  }

    return x;

}


// function factorial(n){
//
//   if(n < 0 ) return 'does not exist';
//
//   if(n === 0 || n === 1){
//     return 1;
//   }else{
//     return n * factorial(n - 1);
//   }
// }
console.log(factorial(-6));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(9));
