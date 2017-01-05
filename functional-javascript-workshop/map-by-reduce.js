function map(arr, func){
	return arr.reduce((mapResult, val) => {
		mapResult.push(func(val));
		return mapResult;
	}, []);
}

module.exports = map;