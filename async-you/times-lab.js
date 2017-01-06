var async = require('async');
var http = require('http');

var host = process.argv[2];
var port = parseInt(process.argv[3]);

async.series([
	doTimes,
	function(cb){
			var opts = {
				hostname: host,
				port: port,
				method: 'GET',
				path: '/users'
			};
			var getResult = '';
			var req = http.request(opts, (resp) => {
				resp.on('data', (chunk) => {
					getResult += chunk.toString();
				});
				resp.on('end', () => {
					cb(null, getResult);
				});
				resp.on('error', (err) => {
					cb(err);
				});
			});
			req.end();
		}
	],
	function(err, result){
		if(err) return console.error(err);
		console.log(result[1]);
	});

function doTimes(cb){
	async.times(5, function(time, next){
			var body = JSON.stringify(
					{ 
						"user_id": time+1
					}
				);
			var opts = {
				hostname: host,
				port: port,
				method: 'POST',
				path: '/users/create'
			};
			var req = http.request(opts, (resp) => {
				resp.on('data', (chunk) => {
					
				});
				resp.on('end', () => {
					next(null, null);
				});
				resp.on('error', (err) => {
					next(err);
				});
			});
			req.write(body);
			req.end();
		}, function(err, result){
			cb(null, null);
		});
}



