var fs = require('fs');
    
function run (generator) {

	var it = generator(go);

	function go(err, result) {
		it.next(result);
	}

	go();
}

run(function* (done) {
	var firstFile;
	try{
		var dirFiles = yield fs.readdir('NoNoNoNo', done);
		firstFile = dirFiles[0];
	}
	catch(e){
		firstFile = null;
	}
	console.log(firstFile);
});