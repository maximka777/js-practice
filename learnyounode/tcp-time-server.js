var net = require('net');
var strftime = require('strftime');
var date = require('date');

var port = Number(process.argv[2]);

var server = net.createServer(function(socket){
	socket.write(strftime('%Y-%m-%d %H:%M', new Date()));
	socket.end('\n');
});
server.listen(port);