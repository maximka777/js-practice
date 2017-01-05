function reduce(arr, func, init){
	if(arr.length == 0) return init;
	init = func(init, arr.shift(), 0, arr);
	return reduce(arr, func, init);
}

module.exports = reduce;