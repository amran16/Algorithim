function isPrime(num){

  if(num <= 1){
    return false
  }

  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return true;

  //return num !== 1;

}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(3))
console.log(isPrime(9))
