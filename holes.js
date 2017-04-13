// 1, 2, 3, 5, 7 => No holes
// 0, 4, 6, 9 => 1 hole
// 8 => 2 holes
function solvePuzzle(num) {

    var holes = 0

    num = num.toString();

    for(var i = 0; i < num.length; i++){
        if(num[i] === '8'){
         holes += 2
       }else if(num[i] === '0' || num[i] === '4' || num[i] === '6' || num[i] === '9'){
           holes++;
       }else{
           holes += 0
       }
    }
    return (holes);
}

console.log(solvePuzzle(630))
console.log(solvePuzzle(1885))
