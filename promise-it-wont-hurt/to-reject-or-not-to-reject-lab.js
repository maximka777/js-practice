var promise = new Promise((fulfill, reject) => {
	setImmediate(() => {
		fulfill('I FIRED');
		reject(new Error('I DID NOT FIRE'));
	});
});

promise.then((result) => {
	console.log(result);
}, (err) => {
	console.log(err.message);
});