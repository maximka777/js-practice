module.exports = function makeImportant(str, importantLength = str.length){
	var result = `${str}${"!".repeat(importantLength)}`;
	return result;
}

