var http = require('http');

var url = process.argv[2];

http.get(url, makeResponse);

function makeResponse(response){
	response.setEncoding('utf8');
	response.on('data', logData);
}

function logData(data){
	console.log(data);
}