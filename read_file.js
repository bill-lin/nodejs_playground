var fs = require("fs");

var data = fs.readFileSync('test.txt');

console.log(data.toString());
console.log("Program Ended");


fs.readFile('test.txt', function (err, data) {
    if( err){
        return console.error(err);
    }else{
        console.log(data.toString());
    }
});


console.log("Program Ended");