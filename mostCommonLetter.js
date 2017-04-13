function mostCommonLetter(str){

 var max = 0;
 var letterPlaceHolder;
 var obj = {};

 for(var i = 0; i < str.length; i++){
   obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  //  if(ob[str[i]] === undefined){
  //    obj[str[i]] = 1;
  //  }else{
  //    obj[str[i]]++
  //  }
   if(obj[str[i]] > max){
      max = obj[str[i]];
      letterPlaceHolder = str[i];
   }
 }
   return [letterPlaceHolder, max];
}
console.log(mostCommonLetter('abca'));
console.log(mostCommonLetter("abbab"));
console.log(mostCommonLetter1("abcde"));

console.log('////////////////////////////');

function mostCommonLetter1(str){

 var count = 0;
 var maxLetter = 0;
 var placeHolder;

 for(var i = 0; i < str.length; i++){
   for(var j = 0; j < str.length; j++){
     if(str[j] === str[i]){
     count++
     }
   }
   if(maxLetter < count){
     maxLetter = count;
     placeHolder = str[i];
   }
   count = 0;
 }
   return [placeHolder, maxLetter];
}

console.log(mostCommonLetter1('abca'));
console.log(mostCommonLetter1("abbab"));
console.log(mostCommonLetter1("abcde"));
