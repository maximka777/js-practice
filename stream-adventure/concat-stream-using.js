var concat = require('concat-stream');

process.stdin.pipe(concat(function(data){
	data = data.reverse();
	process.stdout.write(data);
}));