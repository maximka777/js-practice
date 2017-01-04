var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

module.exports = function(){
	var genres = [];
	var currentGenre;

	var splitStream = split();
	var throughStream = through(function(buffer, encoding, next){
		var json = buffer.toString();
		if(!(json == '')){
			var obj = JSON.parse(json);
			if(obj['type'] == 'genre'){
				var genre = {
					"name": obj['name'],
					"books": []
				};
				currentGenre = genre;
				genres.push(genre);
			} else if(obj['type'] == 'book'){
				var book = obj['name'];
				currentGenre.books.push(book);
			}
		}
		next();
	},
	function(done){
		genres.forEach(this.push);
		done();
	});

	var zipStream = zlib.createGzip();

	return combine(splitStream, throughStream, zipStream);
};