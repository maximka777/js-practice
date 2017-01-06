var async = require('async');
var http = require('http');

async.each([process.argv[2], process.argv[3]], function(url, done){
	http.get(url, (resp) => {
		resp.on('data', (chunk) => {
		});
		resp.on('end', () => {
			done(null);
		});
		resp.on('error', (err) => {
			done(err);
		});
	}).on('error', (err) => {
		done(err);
	});
},
function(err){
	console.log(err);
});