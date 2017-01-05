function repeat(operation, num) {
	setTimeout(() => {
		console.log('Operations successfully interrupted!');
		process.exit(0);
	}, 100);
	if (num <= 0) return
	operation();
	return repeat(operation, --num);
}

module.exports = repeat;