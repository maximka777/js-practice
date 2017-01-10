var _ = require('lodash');

module.exports = (user) => {
	return _.template('Hello <%= name =%> (logins: <%= loginCount =%>)')({
		name: user.name,
		loginCount: _.size(user.login)
	});
};

