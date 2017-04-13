
function scramble_string(string, positions){

  var result = '';

  //console.log(string[positions[2]]);

  for(var i = 0; i < positions.length; i++){
    result = result + string[positions[i]];

    //console.log(string[positions[i]]);

  }
  return result;
}
console.log(scramble_string("abcd", [3, 1, 2, 0])) //dbca
console.log(scramble_string("markov", [5, 3, 1, 4, 2, 0])) //vkaorm
