var express = require('express');

var app = express();

app.get('/search', (req, resp) => {
	var obj = {};
	for(var prop in req.query){
		obj[prop] = req.query[prop];
	}
	resp.send(obj);
});

app.listen(process.argv[2] || 7777);