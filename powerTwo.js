function ispowerTwo(num){

  //return Math.pow(2, num)

  // if(num <= 0) return false;
  //
  // if(num === 1 || num === 2) return true;
  //
  //   while(num !== 2){
  //     if(num % 2 !== 0){
  //       return false
  //     }
  //       num = num / 2;
  //   }
  //
  //   return true;


    if(num <= 0) {
      return false;
    } else if(num === 1 || num === 2) {
      return true;
    } else if(num % 2 !== 0) {
      return false;
    } else {
      return ispowerTwo(num / 2);
    }

}
console.log(ispowerTwo(-16));
console.log(ispowerTwo(0));
console.log(ispowerTwo(1));
console.log(ispowerTwo(2));
console.log(ispowerTwo(35));
console.log(ispowerTwo(64));
console.log(ispowerTwo(78));
console.log(ispowerTwo(4294967296));

// var isPowerOfTwo = function(n) {
//     if(n % 2 === 0) {       // Check for even number first
//         if(n > 2) {         // Only reiterate if value is positive and not 2
//             return isPowerOfTwo(n/2);
//         } else if(n <= 0) { // Deny negative number
//             return false;
//         } else {            // Only posibility is value 2
//             return true;
//         }
//     } else {                // Old numbers
//         if(n == 1) {        // 1 been the only valid odd number
//             return true;
//         } else {
//             return false;
//         }
//     }
// };
