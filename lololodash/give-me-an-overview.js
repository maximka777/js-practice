var _ = require('lodash');

module.exports = (artilces) => {
	return _.chain(artilces).reduce((accumulator, article) => {
		var artAcc;
		if(!(artAcc = isInAccumulator(accumulator, article))){
			artAcc = {
				'article': article.article,
				'total_orders': 0
			};
			accumulator.push(artAcc);
		}
		artAcc.total_orders += article.quantity;
		return accumulator;
	}, []).sortBy((item) =>{
		return (-1) * item.total_orders;
	});
};

function isInAccumulator(accumulator, obj){
	for(var item of accumulator){
		if(item.article == obj.article){
			return item;
		}
	}
	return null;
}