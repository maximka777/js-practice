function *multiplier(){
	var i = 0;
	var m = 1;
	while(true){
		i++;
		if(m){
			m = yield i * m;
		}
		else{
			m = yield i;
		}
	}
}

module.exports = multiplier;