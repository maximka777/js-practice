var bl = require('bl');
var http = require('http');

var url = process.argv[2];

http.get(url, makeResponse);

function makeResponse(response){
	response.pipe(bl(function(err, data){
		var dataAsString = data.toString();
		console.log(dataAsString.length);
		console.log(dataAsString);
	}));
}