function all(promiseOne, promiseTwo){
	var counter = 0;
	var results = [];
	var innerPromise = new Promise((fulfill, reject) => {
		promiseOne.then((result) => {
			counter++;
			results[0] = result;
			if(counter == 2){
				fulfill(results);
			}
		});
		promiseTwo.then((result) => {
			counter++;
			results[1] = result;
			if(counter == 2){
				fulfill(results);
			}
		});
	});
	return innerPromise;
}

all(getPromise1(), getPromise2()).then((results) => {
	console.log(results);
});

