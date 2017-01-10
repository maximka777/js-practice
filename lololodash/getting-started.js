var _ = require('lodash');

function getActiveUsers(users){
	return _.filter(users, {active: true});
}

module.exports = getActiveUsers;