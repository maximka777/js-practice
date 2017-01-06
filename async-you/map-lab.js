var async = require('async');
var http = require('http');

var urls = [process.argv[2], process.argv[3]];

async.map(urls, function(url, done){
	var result = '';
	http.get(url, (resp) => {
		resp.on('data', (chunk) => {
			result += chunk.toString();
		});
		resp.on('end', () => {
			done(null, result);
		});
		resp.on('error', (err) => {
			done(err);
		});
	});
}, function(err, results){
	if(err) return console.error(err);
	console.log(results);
});