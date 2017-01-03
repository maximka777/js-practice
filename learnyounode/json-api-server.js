var http = require('http');
var url = require('url');

var server = http.createServer(function(req, resp){
	var parsed = url.parse(req.url, true);
	var iso = parsed.query.iso;
	var path = parsed.pathname;
	var date = new Date(Date.parse(iso));
	resp.writeHead(200, {
		'Content-Type': 'application/json'
	});
	var obj = {};
	if(path == '/api/parsetime'){
		obj = createTimeObject(date);
	} else if(path == '/api/unixtime'){
		obj = createUnixTimeObject(date);
	}
	resp.write(JSON.stringify(obj));
	resp.end('\n');
});
server.listen(Number(process.argv[2]));

function createTimeObject(date){
	var obj = {};
	obj.hour = date.getHours();
	obj.minute = date.getMinutes();
	obj.second = date.getSeconds();
	return obj;
}

function createUnixTimeObject(date){
	return {
		unixtime: date.getTime()
	};
}