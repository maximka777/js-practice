var mongo = require('mongodb').MongoClient;

mongo.connect(`mongodb://localhost:27017/learnyoumongo`, (err, db) => {
	if(err) throw err;
	db.collection('users').count({
		age: {
			$gt: +process.argv[2]
		}
	}, (err, data) => {
		console.log(err || data);
		db.close();
	});
});