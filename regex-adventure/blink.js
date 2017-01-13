var marked = require('marked');

module.exports = function (str) {
	str = marked(str);
	var arr;
	while(arr = /@@([\d\w<>/]+)@@/g.exec(str)){
		str = str.replace(new RegExp(arr[0]), `<blink>${arr[1]}</blink>`);
	}
	return str;
}