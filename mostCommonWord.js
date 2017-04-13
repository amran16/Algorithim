//O(n) time complexity
var mostCommonWord = function(arr){
   var obj = {},
       placeHolder,
       max = 0;

   for(var i = 0; i < arr.length; i++){
     //obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1: 1;
   	 if(obj[arr[i]] === undefined){
   	 	obj[arr[i]] = 1;
   	 	//console.log([arr[i]]); //gives you the key
   	 	//console.log(obj[arr[i]]);  //gives you the value
   	 	//console.log(obj); //give you the whole object
   	 	//console.log(i); //gives you the index
   	 }else{
   	 	obj[arr[i]]++;
   	 }

   	 if(obj[arr[i]] > max){
       max = obj[arr[i]];
   	 	 placeHolder = arr[i];
   	 }
   }
   return [placeHolder, max];
};

console.log(mostCommonWord(['pear', 'apple', 'orange', 'pear','apple', 'pear']));
console.log(mostCommonWord(['pen', 'book', 'appl', 'ipad', 'pen', 'book']));
