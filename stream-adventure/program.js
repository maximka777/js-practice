var filename = process.argv[2];

var fs = require('fs');

var fileStream = fs.createReadStream(filename);
fileStream.pipe(process.stdout);