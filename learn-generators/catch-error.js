function *upper(arr){
	for(var str of arr){
		try{
			yield str.toUpperCase();
		}
		catch(e){
			yield null;
		}
	}
}

var bad_items = ['a', 'B', 1, 'c'];
    
for (var item of upper(bad_items)){
	console.log(item);
}