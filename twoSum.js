//Time complexity : O(n^2). For each element, we try to find its complement by looping through the rest of array which takes O(n) time. Therefore, the time complexity is O(n^2).
//Space complexity : O(1).
function twoSum(arr, target){

  for(var i = 0; i < arr.length; i++){
   for(var j = i + 1; j <arr.length; j++){
     //if(arr[j] === target - arr[i])
     if(arr[i] + arr[j] === target){
       return [arr[i], arr[j]]
       //return [i, j]
       }
     }
   }
}
console.log(twoSum([1, 2, 5, -3, 8], 10))
//Time complexity : O(n). We traverse the list containing nn elements exactly twice. Since the hash table reduces the look up time to O(1),
//the time complexity is O(n).
//Space complexity : O(n)O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements.
function twoSum(arr, target) {
    var obj = {};
    var result = [];

    for (var i = 0; i < arr.length; i++) {

      var sumMinusElement = target - arr[i];

      // if (obj[sumMinusElement] !== undefined)
      if(obj.hasOwnProperty(sumMinusElement)){
        result.push([arr[i], sumMinusElement]);
      }
       obj[arr[i]] = arr[i];
    }
    return result;
}

console.log(twoSum([3, 5, 4, -4, 8, 11],7));

function TwoSum(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[0] === arr[i] + arr[j]) {
        result.push([arr[i],arr[j]]);
      }
    }
  }
  return result.length > 0 ? result: -1;
  //return result.length > 0 ? result.join(' ') : -1;
}


console.log(TwoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]));
console.log(TwoSum([7, 6, 4, 1, 7, -2, 3, 12]));
console.log(TwoSum([5,2,-4,11]));
