var someInvalidJson = process.argv[2];

function parsePromised(json){
	var promise = new Promise((fulfill, reject) => {
		try{
			fulfill(JSON.parse(json));
		} catch(e){
			reject(e);
		}
	});
	return promise;
}

parsePromised(someInvalidJson).then(null, console.log);