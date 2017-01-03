var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var port = Number(process.argv[2]);
var filename = process.argv[3];

var server = http.createServer(function (request, response){
	var fileStream = fs.createReadStream(filename);
	fileStream.pipe(response);
	response.end('\n');
});	

server.listen(port);