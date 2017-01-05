function getAllDependencies(tree){
	console.log(tree);
	return getDependencies(tree.dependencies);
}

function getDependencies(dependencies){
	var result = [];
	Object.keys.call(dependencies).forEach((property) => {
	    result.push(`${property}@${dependencies[property].version}`);
	    if('dependencies' in dependencies[property]){
	    	result.concat(getDependencies(dependencies[property].dependencies));
	    }
	});
	return result;
}

module.exports = getAllDependencies;