var fs = require("fs");

var readerStream = fs.createReadStream('test.txt');
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
readerStream.pipe(writerStream);

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
    console.log("reading "+chunk);
});

readerStream.on('end',function(){
    console.log("read completed.");
});

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program Ended");