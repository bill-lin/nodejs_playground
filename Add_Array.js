"use strict";

var foo = {name: 'kitten'}
foo.name;
foo['name'];

var get = 'name';

console.log(0.1 + 0.3);
console.log(foo[get]);

console.info(foo['name']);
console.info(foo['1234']);


for (var a = 0; a < 10; a++) {
    console.log("a=" + a + ",");
}

b = 1;
console.log("b=" + b);

var myArray = [1, "a", b];
myArray.forEach(function (m, index, array) {
    console.log("m=" + m + " index=" + index + " array=" + array);
});
myArray.push(foo['1234']);
printArray(myArray);


function printArray(arrayInput) {
    arrayInput.forEach(function (m, index, array) {
        console.log("m=" + m + " index=" + index + " array=" + array);
    });
}

function add() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}


// function add2() {
//     var sum = 0;
//     arguments.forEach( function (a, index, array) {
//         sum += a;
//     })
//     return sum;
// }

console.log("add 1 2 3 = ", add(1, 2, 3));
// console.log("add 2 3 4 = ", add2(2, 3, 4));
console.log("add 1 2 3 = ", add.apply(null, [1, 2, 3]));

function addWithName(name) {
    console.log(name);
    var sum = 0;
    for (var i = 1, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(addWithName("add 1 2 3 = ", 1, 2, 3));
var sum = function () {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log("sum 1 2 3 = ", sum( 1, 2, 3));
