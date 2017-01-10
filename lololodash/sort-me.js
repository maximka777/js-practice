var _ = require('lodash');

module.exports = (collection) => {
	return _.sortBy(collection, (item) => {
		return (-1) * item.quantity;
	});
};