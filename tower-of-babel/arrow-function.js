var inputs = process.argv.slice(2);
    var result = inputs.map((word) => {
    	return word[0];
    }).reduce((result, letter) => {
    	return result + letter;
    }, "");
    console.log(result);