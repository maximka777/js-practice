var express = require('express');
var stylus = require('stylus');
var path = require('path');

var port = process.argv[2];

var dir = process.argv[3];

var app = express();


app.use(stylus.middleware(dir));
app.use(express.static(dir));

app.listen(port);