var async = require('async'),
	http = require('http');

var url = process.argv[2];

var currentResult = "";
var count = 0;
var flag = true;

async.whilst(
	function() {
		if(currentResult === "meerkat"){
        	flag = false;
        }
		return flag;
	},

    function(callback) {
    	currentResult = "";
        count++;
        http.get(url, (resp) => {
			resp.on('data', (chunk) => {
				currentResult += chunk.toString();
			});
			resp.on('end', () => {
				callback(null, count);
			});
			resp.on('error', (err) => {
				callback(err);
			});
		});
    },
    function (err, n) {
        console.log(n);
    }
)