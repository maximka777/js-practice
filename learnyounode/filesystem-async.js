var fs = require('fs');

var filename = process.argv[2];
fs.readFile(filename, 'utf8', logStringCount);



function logStringCount(err, data){
	if(err){
		console.log(err);
	}
	else{
		var stringCount = data.split('\n').length - 1;
		console.log(stringCount);
	}
}
