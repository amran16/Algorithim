function StairCase(n) {
    var s = '';
    for (var i = 1; i <= n; i++) {
            s += ' '.repeat(n - i) + '#'.repeat(i)  + '\n';
    }
    return s;
}
console.log(StairCase(7))

function triangle(n){
  for (var i = "#"; i.length < n; i += "#")
  console.log(i);
}
console.log(triangle(7))

function processData(n) {
    //var n = parseInt(input);
    for(var i = 0; i < n; i++)
    {
        var s = "";
        for(var j = 0; j < n; j++)
        {
            if(n - i - 2 < j)
            {
                s += "#";
            }
            else
            {
                s += " ";
            }
        }
        console.log(s);
    }
}
console.log(processData(7))
