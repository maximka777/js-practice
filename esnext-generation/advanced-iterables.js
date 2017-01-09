function generateIterator(even){
	var i;
	if(even){
		i = 0;
	}
	else{
		i = -1;
	}
	return {
		next: (swap) => {
			if(swap == true){
				i--;
			}
			return {
				value: i+=2,
				done: false
			};
		}
	};
}

module.exports = generateIterator;