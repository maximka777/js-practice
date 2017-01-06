var Q = require('q');

function alwaysThrows(){
	throw new Error("OH NOES");
}

var arg = 1;

function iterate(){
	console.log(arg);
	arg++;
	return arg;
}

Q.fcall(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.catch(console.log)
.done();