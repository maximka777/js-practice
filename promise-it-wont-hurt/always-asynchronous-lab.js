var promise = new Promise((fulfill, reject) => {
	fulfill('PROMISE VALUE');
});

promise.then((result) => {
	console.log(result);
});


console.log('MAIN PROGRAM');