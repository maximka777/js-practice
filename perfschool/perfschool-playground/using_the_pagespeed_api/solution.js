'use strict';

var fs = require('fs');
var https = require('https');
var path = require('path');
var express = require('express');
var app = express();
var port = 7777;
var localtunnel = require('localtunnel');

var appUrl;

var API_URL = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?';

getAppUrl();

function getAppUrl(){
  var tunnel = localtunnel(port, function(err, tunnel) {
    if(err){
      console.log(err);
      process.exit(0);
    }
    appUrl = tunnel.url;
    console.log(appUrl);
  });

  tunnel.on('close', function() {
    getAppUrl();
  });
}

app.get('/', home);
app.get('/insights', insights);
app.listen(port, listening);

function listening () {
  console.log('Listening on port', port);
}

function home (req, res) {
  var file = path.join(__dirname, 'index.html');
  var index = fs.readFileSync(file, 'utf8');
  res.send(index);
}

function insights (req, res) {
  var data = "";
  https.get(`${API_URL}url=${appUrl}`, function(resp) {
    resp.on("data", (chunk) => {
      data += chunk.toString();
    });
    resp.on("end", () => {
      var respObj = JSON.parse(data);
      res.send(JSON.stringify({
        "resources": {
          "css": respObj.pageStats.numberCssResources,
          "js": respObj.pageStats.numberJsResources,
          "hosts": respObj.pageStats.numberHosts,
          "total": respObj.pageStats.numberResources
        }
      }));
    });
    resp.on("error", (err) => {
      console.error(err);
      process.exit(0);
    });
    //resp.pipe(res);
  });
}
