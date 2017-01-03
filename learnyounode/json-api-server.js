var http = require('http');
var url = require('url');

var server = http.createServer(function(req, resp){
	var iso = url.parse(req.url, true).query.iso;
	var date = new Date(Date.parse(iso));
	resp.writeHead(200, {
		'Content-Type': 'application/json'
	});
	var obj;
	if(req.url.startsWith('/api/parsetime')){
		obj = createTimeObject(date);
	} else if(req.url.startsWith('/api/unixtime')){
		obj = createUnixTimeObject(date);
	}
	resp.write(JSON.stringify(obj));
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