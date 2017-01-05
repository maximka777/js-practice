function repeat(func, times){
	for(var i = 0; i < times; i++){
		func();
	}
}

module.exports = repeat;