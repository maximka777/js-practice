var passphrase = process.argv[2];

var crypto = require('crypto');

var cryptoStream = crypto.createDecipher('aes256', passphrase);

process.stdin.pipe(cryptoStream).pipe(process.stdout);