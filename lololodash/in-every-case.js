var _ = require('lodash');

module.exports = (cities) => {
	return _.forEach(cities, (city) => {
		if(city.population >= 1){
			city.size = 'big';
		} else if(city.population < 0.5){
			city.size = 'small';
		} else{
			city.size = 'med';
		}
	})
};