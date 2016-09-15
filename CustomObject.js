"use strict";

function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function() {
      return this.first + ' ' + this.last;
    },
    fullNameReversed: function() {
      return this.last + ', ' + this.first;
    }
  };
}


var p = makePerson("Simon", "Willison");
console.log(p.fullName()); // "Simon Willison"
console.log(p.fullNameReversed()); // "Willison, Simon"


function Person(first, last) {
  this.first = first;
  this.last = last;
}
// add extra methods to existing objects at runtime:
Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};
Person.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
}

Person.prototype.add = function(prefix) {
   this.first += prefix;
}

var p2 = new Person("Simon", "Willison");
console.log(p2);
console.log(p2.fullName()); // "Simon Willison"
console.log(p2.fullNameReversed()); // "Willison, Simon"
p2.add(" -");
console.log(p2.fullName());