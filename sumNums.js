function sumNums(num){

  var sum = 0;

  for(var i = 0; i <= num; i++){
    sum += i
  }
  // var i = 0;
  // while(i <= num){
  //   sum += i;
  //   i++
  // }
  return sum;
}

console.log(sumNums(1));
console.log(sumNums(2));
console.log(sumNums(3));
console.log(sumNums(5));

console.log('//////////////////////////////');
function sumArrays(num){

  var sum = 0;

  for(var i = 0; i < num.length; i++){
    sum += num[i]
  }

  return sum;
}

console.log(sumArrays([1, 2, 3, 4, 10, 11]));
