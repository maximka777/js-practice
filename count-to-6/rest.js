module.exports = function average(...numbers){
	return numbers.reduce((prev, curr) => {return prev + curr;}, 0)/numbers.length;
};