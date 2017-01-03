var filterModule = require('./filter-module.js');

var dirname = process.argv[2];
var extension = process.argv[3];

function logFiles(err, list){
	if(err){
		console.log(err);
	}
	else{
		for(var i = 0; i < list.length; i++){
			console.log(list[i]);
		}
	}
}
filterModule(dirname, extension, logFiles);