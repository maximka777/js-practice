var duplexer = require('duplexer2');
var through = require('through2');

module.exports = function(counter){
	var countObj = {};
	var inputStream = through(function(buffer, encoding, next){
		var country = JSON.parse(buffer.toString())["country"];
		if(!(country in countObj)){
			countObj[country] = 0;
		}
		countObj[country]++;
	}, 
	function(done){
		counter.setCounts(countObj);
		done();
	});
	return duplexer(inputStream, counter);
}