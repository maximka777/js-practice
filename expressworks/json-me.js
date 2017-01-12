var express = require('express');
var fs = require('fs');

var app = express();

var filePath = process.argv[3];

console.log(filePath);

app.get('/books', (req, resp) => {
	fs.readFile(filePath, (err, data) => {
		resp.send(JSON.parse(data.toString()));
	});
});


app.listen(process.argv[2] || 7777);