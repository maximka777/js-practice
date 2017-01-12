module.exports = (str) => {
	return /\d+(.jpeg|.jpg$)/.test(str);
};