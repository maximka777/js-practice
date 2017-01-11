'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var port = 7777;

var WebPageTest = require('webpagetest');
var wpt = new WebPageTest('www.webpagetest.org', 'A.6755d3ef7f0fb003def7967e0b2b369f');

app.get('/', home);
app.get('/test', test);
app.listen(port, listening);

function listening () {
  console.log('Listening on port', port);
}

function home (req, res) {
  var file = path.join(__dirname, 'index.html');
  var index = fs.readFileSync(file, 'utf8');
  res.send(index);
}

function test (req, res) {

  wpt.runTest('https://5691d900.ngrok.io/', {location: 'ec2-eu-central-1:Chrome'}, function(err, data) {
    wpt.getTestResults(data.data.testId, function(err, pageSpeedData) {
      res.send(pageSpeedData);
    });
  });

}
