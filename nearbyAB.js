function nearbyAB(string){

  var str = string.split('');

  for(var i = 0; i < str.length; i++){
    if(str[i] === 'a' && str[i + 4] === 'b'){
      return true;
    }else if(str[i] === 'b' && str[i + 4] === 'a') {
        return true;
    }
   }
    return false;
  }

console.log(nearbyAB('after badl'));
console.log(nearbyAB('Laura sobs'));
console.log(nearbyAB('laneo borrowed'));
console.log(nearbyAB('Laurb soas'));
