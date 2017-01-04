var ws = require('websocket-stream');
var http = require('http');

var server = http.createServer(function(req, resp){
	resp.end();
});

var wsServer = ws.createServer({'server': server}, function(stream){
	stream.pipe(process.stdout);
});

server.listen('8099');