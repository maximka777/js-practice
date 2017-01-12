module.exports = function (str) {
	var arr = /@@([\d\w]+)@@/g.exec(str);
	return str.replace(new RegExp(arr[0]), `<blink>${arr[1]}</blink>`);
}