function dasherizeNumber(num){

  num = (String(num)).split('');

  for(var i = 0; i < num.length - 1; i++){
    if((num[i] % 2 === 1) || (num[i + 1] % 2 === 1)){
      num[i] = num[i] + '-';
    }
  }
    return num.join('');
}

console.log(dasherizeNumber(203)) //'20-3'
console.log(dasherizeNumber(303)) //'3-0-3'
console.log(dasherizeNumber(333)) //'3-3-3'
console.log(dasherizeNumber(3223)) //3-22-3
console.log(dasherizeNumber(99946)) //9-9-946

console.log('////////////////////////////////////////////');

function DashInsert(num) {

	num = num.split('');

  for(var i = 0; i < num.length - 1; i++){
  	if ((num[i] % 2 !== 0) && (num[i + 1] % 2 !== 0)){
  		num[i] = num[i] + '-'
  	}
  }
    return num.join('');
}

console.log(DashInsert('99946')); //9-9-946
console.log(DashInsert('56730')); //567-30
console.log(DashInsert('454793')); //4547-9-3
