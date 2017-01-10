var _ = require('lodash');

module.exports = (freelancers) => {
	var average = _.reduce(freelancers, (sum, freelancer) => {
		return sum + freelancer.income;
	}, 0) / _.size(freelancers);
	var result = {
		'average': average,
		'underperform': _.chain(freelancers).filter((freelancer) => {
			return freelancer.income <= average;
		}).sortBy('income'),
		'overperform': _.chain(freelancers).filter((freelancer) => {
			return freelancer.income > average;
		}).sortBy('income')
	};
	return result;
};