var mongo = require('mongodb').MongoClient;

mongo.connect(`mongodb://localhost:27017/${process.argv[2]}`, (err, db) => {
	if(err) throw err;
	db.collection('users').update({
		username: 'tinatime'
	}, {
		$set: {
			age: 40
		}
	}, (err, data) => {
		console.log(err || data);
		db.close();
	});
});