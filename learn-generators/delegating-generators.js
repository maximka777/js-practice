function *flat(arr){
	for(var item of arr){
		if(item instanceof Array){
			yield *flat(item);
		}
		else{
			yield item;
		}
	}
}

var A = [1, [2, [3, 4], 5], 6];
for(var item of flat(A)){
	console.log(item);
}