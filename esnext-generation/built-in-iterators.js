function filterForNumbers(iterable){
	var result = [];
	for(var item of iterable){
		if(typeof(item) === "number"){
			result.push(item);
		}
	}
	return result;
}

module.exports = filterForNumbers;