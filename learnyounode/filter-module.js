var fs = require('fs');
var path = require('path');

var extnameGlobal;
var callbackGlobal;

module.exports = function(dirname, extname, callback){
	extnameGlobal = '.' + extname;
	callbackGlobal = callback;
	fs.readdir(dirname, filterFiles);
}

function filterFiles(err, list){
	if(err){
		return callbackGlobal(err);
	}
	list = list.filter(function filteByExt(file){
		return path.extname(file) == extnameGlobal;
	});
	return callbackGlobal(null, list);
}