function match(matchtype, left, right) {
   if (matchtype == 'left') {
        return leftjoin(left, right)
    } else if (matchtype == 'right') {
        return rightjoin(left, right)
    } else if (matchtype == 'inner') {
        return matchtypejoin(left, right)
    }

}

function rightjoin(X, Y) {
    var h = hash(X)
    var result = []
    for(var i = 0; i < Y.length; i++) {
        var r = h[Y[i]]
        if (r === undefined) {
            r = []
        }
        for (var j = 0; j < r.length; j++) {
            result.push([r[j], i])
            console.log(r[j], i)
        }
        if (r.length == 0) {
            result.push([-1, i])
            console.log(-1, i)
        }
    }
    return result
}

function leftjoin(X, Y) {
    var h = hash(Y)
    var result = []
    for(var i = 0; i < X.length; i++) {
        var r = h[X[i]]
        if (r === undefined) {
            r = []
        }
        for (var j = 0; j < r.length; j++) {
            result.push([i, r[j]])
            console.log(i, r[j])
        }
        if (r.length == 0) {
            result.push([i, -1])
            console.log(i, -1)
        }
    }
    return result
}

function matchtypejoin(X, Y) {
    var h = hash(Y)
    var result = []
    for(var i = 0; i < X.length; i++) {
        var r = h[X[i]]
        if (r) {
            for (var j = 0; j < r.length; j++) {
                result.push([i,r[j]])
                console.log(i, r[j])
            }
        }
    }
    return result
}

function hash(X) {
    var h = {}
    for (var i = 0; i < X.length; i++) {
        if (!h[X[i]]) {
            h[X[i]] = []
        }
        h[X[i]].push(i)
    }
    return h
}

console.log(match((
    "apple",
"grape",
"grape",
"melon"
), (
    "grape",
"lemon",
"apple"
)))
