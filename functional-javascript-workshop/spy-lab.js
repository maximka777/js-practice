function Spy(target, method){
	var countObj = {
		count: 0
	};
	var nativeMethod = target[method];
	target[method] = function(){
		countObj.count++;
		nativeMethod.apply(target, [].slice(arguments));
	}
	return countObj;
}

module.exports = Spy;