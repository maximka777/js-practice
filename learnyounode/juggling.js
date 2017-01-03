var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2, 5);

var count = 0;

var responseQueue = [];

urls.forEach(function(url){
	http.get(url, processResponse);
});

function processResponse(response){
	response.setEncoding('utf8');
	response.pipe(bl(function(err, data){
		responseQueue.push(data.toString());
		count++;
		printAllResponses();
	}));
}

function printAllResponses(){
	if(count == 3){
		responseQueue.forEach(console.log);
	}
}