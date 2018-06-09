
function add(a, b, c) {
    return a + b + c;
}

function multiply(a, b, c) {
    return a * b * c;
}

function doIt(a, b, c) {
    return (a + b) * c;
}

var added = add(1, 2, 3);
added += add(1, 2, 3);
var multiplied = multiply(1, 2, 4);
var hi = doIt(1, 2, 3); 

console.log('added is ' + added);
console.log('multiplied is ' + multiplied);
console.log('added then muiltiplied is ' + hi);


