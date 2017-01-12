module.exports = function (str) {
	return /^(robot|cat|dog)\d+$/.test(str);
}