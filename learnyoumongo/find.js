var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
	if(err) process.exit(0);
	db.collection('parrots').find({
		age: {
			$gt: +process.argv[2]
		}
	}, (err, result) => {
		console.log(result);
	});
	db.close();
});