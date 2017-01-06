var http = require('http'),
	async = require('async'),
	fs = require('fs');

var pathToFile = process.argv[2];

async.waterfall([
	function(cb){
		var body = '';
		var stream = fs.createReadStream(pathToFile, 'utf8');
		stream.on('data', function(chunk){
			body += chunk.toString();
		});
		stream.on('end', function(){
			cb(null, body);
		});
		stream.on('error', function(err){
			cb(err);
		});
	},
	function(url, cb){
		var body = '';
		http.get(url, function(resp){
			resp.on('data', function(chunk){
				body += chunk.toString();
			});
			resp.on('end', function(){
				cb(null, body);
			});
			resp.on('error', function(err){
				cb(err);
			});
		});
	}
	],
	function(err, result){
		if(err) return console.error(err);
		console.log(result);
	});