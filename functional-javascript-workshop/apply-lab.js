function createLoggerWitnNamespaceFunc(namespace){
	return function(){
		console.log.apply(null, [namespace].concat([].slice.call(arguments)));
	}
}

module.exports = createLoggerWitnNamespaceFunc;