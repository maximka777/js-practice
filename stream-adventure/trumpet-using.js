var trumpet = require('trumpet');
var through = require('through2');

var tr = trumpet();

tr.pipe(process.stdout);

var stream = tr.select('.loud').createStream();

stream.pipe(through(function(buffer, encoding, next){
	this.push(buffer.toString().toUpperCase());
	next();
})).pipe(stream);



process.stdin.pipe(tr);