function *generateGenerator(even){
	var i;
	if(even){
		i = 0;
	}
	else{
		i = -1;
	}
	while(true){
		i+=2;
		yield i;
	}
}

module.exports = generateGenerator;