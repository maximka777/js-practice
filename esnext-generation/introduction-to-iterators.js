function makeCounter(someObj){
	var start = 0;
	var end = 10;
	var i = start;
	someObj.next = () => {
		return {
			'value': ++i,
			'done': i > end
		};
	};
}

module.exports = makeCounter;