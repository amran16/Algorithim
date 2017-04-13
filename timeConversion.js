function timeCoversion(minutes){

  return  Math.floor(minutes/60) + ':'+ minutes % 60;

}
console.log(timeCoversion(15));
console.log(timeCoversion(155));
console.log(timeCoversion(360));

console.log('///////////////////////////////');

function timeCoversion1(numInSecs){

  var result;

  var hours = Math.floor(numInSecs/3600);
  var minutes = Math.floor((numInSecs % 3600) / 60);
  var seconds = numInSecs % 60;

  result = (hours < 10 ? '0' + hours : hours);
  result = result + ':' + (minutes < 10 ? '0' + minutes: minutes);
  result = result + ':' + (seconds < 10 ? '0' + seconds: seconds);
      
  return result;
}
console.log(timeCoversion1(15));
console.log(timeCoversion1(1880));
console.log(timeCoversion1(9015));
console.log(timeCoversion1(188));


function timeToSecs(time) {
    
    time = time.split(":").reverse();

     var  numToSec = 0;

    for (var i = 0; i < time.length; i++) {
       numToSec += time[i] * Math.pow(60, i);

    }
    return parseInt(numToSec);
}

console.log(timeToSecs('1:02:10'));
