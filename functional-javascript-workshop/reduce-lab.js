function countWords(inputWords){
	return inputWords.reduce((countObj, val) => {
		if(!(val in countObj)){
			countObj[val] = 0;
		}
		countObj[val]++;
		return countObj;
	}, {});
}

module.exports = countWords;