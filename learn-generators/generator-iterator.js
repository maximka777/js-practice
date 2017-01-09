function *factorial(n){
	var i = 1;
	var result = 1;
	while(i <= n){
		result = result * i++;
		yield result;
	}
}

for(var n of factorial(5)){
	console.log(n);
}