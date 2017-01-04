var through = require('through2');
var http = require('http');


var server = http.createServer(function(req, resp){
	req.pipe(through(function(buffer, encoding, next){
		this.push(buffer.toString().toUpperCase());
		next();
	})).pipe(resp);
});
server.listen(process.argv[2]);