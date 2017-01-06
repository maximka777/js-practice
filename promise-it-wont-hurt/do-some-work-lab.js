var http = require('q-io/http');

http.read("http://localhost:7000").then((result) => {
	var id = result.toString();
	return http.read(`http://localhost:7000/<${id}>`);
}).then((result) => {
	console.log(result.toString());
});