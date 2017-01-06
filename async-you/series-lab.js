var async = require('async'),
	http = require('http');

var urls = [process.argv[2], process.argv[3]];

async.series({
	requestOne: function(cb){
		doGet(urls[0], cb);
	},
	requestTwo: function(cb){
		doGet(urls[1], cb);
	}
},
function(err, resultObj){
	if(err) return console.error(err);
	console.log(resultObj);
});

function doGet(url, cb){
	var body = '';
	http.get(url, (resp) => {
		resp.on('data', (chunk) => {
			body += chunk.toString();
		});
		resp.on('end', () => {
			cb(null, body);
		});
		resp.on('error', (err) => {
			cb(err);
		});
	});
}