"use strict";

var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
b.b=2;
console.log(b.a); // 1 (inherited)
console.log(b.b); // 2 
var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null
console.log(c.a); // 1 (inherited)
console.log(c.b); // 2 (inherited)
var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype
