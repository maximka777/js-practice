var async = require('async'),
	http = require('http');

var url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, function(prevValue, currItem, next){
	var result = '';
	http.get(`${url}?number=${currItem}`, (resp) => {
		resp.on('data', (chunk) => {
			result += chunk.toString();
		});
		resp.on('end', () => {
			next(null, prevValue + Number(result));
		});
		resp.on('error', (err) => {
			next(err);
		});
	});
}, function(err, result){
	if(err) return console.error(err);
	console.log(result);
});

