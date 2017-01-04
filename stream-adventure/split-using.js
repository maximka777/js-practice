var through = require('through2');
var split = require('split');

var stream = through(write, end);

var lineCount = 1;

function write(buffer, encoding, next){
	if(lineCount & 1){
		this.push(buffer.toString().toLowerCase() + '\n');
	}
	else{
		this.push(buffer.toString().toUpperCase() + '\n');
	}
	lineCount++;
	next();
}

function end(done){
	done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);