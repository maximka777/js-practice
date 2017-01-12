var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db){
	if(err) return console.error(err);
	db.collection('parrots').find({
		age: {
			$gt: +process.argv[2]
		}
	}, {
		age: 1,
		name: 1,
		_id: 0
	}).toArray((err, documents) => {
		if(err) return console.error(err);
		console.log(documents);
		db.close();
	});
});