var _ = require('lodash');

module.exports = (userComments) => {
	return _.chain(userComments).groupBy('username').map((item, key) => {
		return {
			'comment_count': _.size(item),
			'username': key
		};
	}).sortBy((item) => {
		return (-1) * item.comment_count;
	});
};