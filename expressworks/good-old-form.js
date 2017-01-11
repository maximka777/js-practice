var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.post('/form', (req, resp) => {
	resp.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);