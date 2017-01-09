//didn't solve
function run (generator) {

	var next = generator().next();

	if(!next.done){
		next.value.then((result) => {
			console.log(result);
		});
	}
}

function askFoo() {
	return new Promise(function (resolve, reject) {
		resolve('foo');
	});
}

run(function* (){
	var foo = yield askFoo();
});