var http = require('q-io/http');

var promise = http.read('http://localhost:1337');
promise.then((result) => {
	console.log(JSON.parse(result.toString()));
});