var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });
console.log(a2);

var a3 = a.map( s => s.length );
console.log(a3);


function Person() {
    var self = this; // Some choose `that` instead of `self`.
                     // Choose one and be consistent.
    self.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
    }, 1000);
}

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the person object
    }, 1000);
}

var p = new Person();