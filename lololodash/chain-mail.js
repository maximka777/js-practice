var _ = require('lodash');

module.exports = (words) => {
	return _.chain(words).map((word) => {
		return word.toUpperCase().concat("CHAINED");
	}).sortBy();
};