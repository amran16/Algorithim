function thirdGreates(arr){

  arr = arr.sort();
  //console.log(arr);

  for(var i = 0; i < arr.length; i++){
       return arr[arr.length - 3]
 }
}
console.log(thirdGreates([5, 3, 7]));
console.log(thirdGreates([5, 3, 7, 4]));
console.log(thirdGreates([2, 3, 7, 4]));

function ThirdGreatest(strArr) {

 	var sorted = strArr.sort(function(a, b){
  	return b.length - a.length;
  });
  //console.log(sorted);
  return sorted[2];

}
console.log(ThirdGreatest(["coder","fyte","code"]));  //code
console.log(ThirdGreatest(["abc","defg","z","hijk"]));  //abc
console.log(ThirdGreatest(["hello", "world", "after", "all"]));  //after
