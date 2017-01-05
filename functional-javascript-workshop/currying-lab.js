function curryN(fn, n){
	if(!n){
		n = fn.length;
	}
	var params = [];
	function func(){
		params.push(arguments[0]);
		if(params.length == n){
			return fn.apply(null, params);
		}
		return func;
	}

	return func;
}

module.exports = curryN;