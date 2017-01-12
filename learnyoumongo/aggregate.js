var mongo = require('mongodb').MongoClient;

mongo.connect(`mongodb://localhost:27017/learnyoumongo`, (err, db) => {
	if(err) throw err;
	db.collection('prices').aggregate([{
		$match: {
			size: process.argv[2]
		}
	}, {
		$group: {
			_id: 'average',
			total: {
				$avg: "$price"
			}
		}
	}]).toArray((err, docs) => {
		console.log(err || Number(docs[0].total).toFixed(2));
		db.close();
	});
});