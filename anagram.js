function anagramChecker(str1, str2){

  if(str1.length !== str2.length || str1.length === 0 || str2.length === 0  ) return false;

  if(str1.sort === str2.sort) return true;


}
console.log(anagramChecker('hey', ''))
console.log(anagramChecker('lemon', 'melon'))
console.log(anagramChecker('', 'book'))
console.log(anagramChecker('acb', 'cab'))
console.log(anagramChecker('apple', 'cat'))

//console.log(('code').sort);

var x = 'ulemon'.split('').sort().join('');
console.log(x);
