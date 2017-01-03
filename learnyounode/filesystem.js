var fs = require('fs');

var filename = process.argv[2];
var fileBuffer = fs.readFileSync(filename);
var fileAsString = fileBuffer.toString();
var stringCount = fileAsString.split('\n').length - 1;
console.log(stringCount);