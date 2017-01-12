module.exports = function (str) {
	return str.match(/"[\w\d\s]*"/g);
}