function foo(){
	var bar = true;
	quux = 5;
	function zip(){
		var quux = 6;
		bar = false;
	}
	return zip;
}

