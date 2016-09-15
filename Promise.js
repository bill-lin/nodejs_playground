var Promise = require("bluebird");

var fs = require("fs");
Promise.promisifyAll(fs);


fs.readFileAsync('test.txt', "utf8").then(function(contents) {
    console.log(contents);
}).catch(function(e) {
    console.error(e.stack);
});


console.log("Program Ended");