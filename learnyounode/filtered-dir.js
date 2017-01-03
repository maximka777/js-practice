var fs = require('fs');
var path = require('path');

var dirName = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(dirName, filterFiles);

function filterFiles(err, list){
	list = list.filter(function filteByExt(file){
		return path.extname(file) == extension;
	});
	for(var i = 0; i < list.length; i++){
		console.log(list[i]);
	}
}