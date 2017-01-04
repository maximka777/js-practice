var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');
var fs	 = require('fs');

var pasphrase = process.argv[3];
var cipherName = process.argv[2];

var decipherStream = crypto.createDecipher(cipherName, pasphrase);

var unzipStream = zlib.createGunzip();

var tarParser = tar.Parse();

var hash;

tarParser.on('entry', function(entry){
	if(entry.type == 'File'){
		hash = crypto.createHash('md5');
		hash.update(entry._header.block);
		console.log(`${hash.digest('hex')} ${entry.path}`);
	}
});

process.stdin.pipe(decipherStream).pipe(unzipStream).pipe(tarParser);
