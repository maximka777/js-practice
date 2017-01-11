var express = require('express');
var path = require('path');

var app = express();

var pathToTemplate = process.argv[3];
var port = process.argv[2];

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', (req, resp) => {
	resp.render('jade-index', {
		date: new Date().toDateString()
	});
});

app.listen(port);