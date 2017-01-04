var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function spawnProcAndDuplexStreams(cmd, args){
	var childProc = spawn(cmd, args);
	return duplexer(childProc.stdin, childProc.stdout);
}
