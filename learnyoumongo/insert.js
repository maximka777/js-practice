var mongo = require('mongodb').MongoClient;

var firstName = process.argv[2];
var lastName = process.argv[3];

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
	if(err) return console.log(err);
	db.collection('users').insertOne({
		'firstName': firstName,
		'lastName': lastName
	}, (err, data) => {
		if(err)  console.log(err);
		db.collection('users').find({
			firstName: process.argv[2],
			lastName: process.argv[3]
		}, {
			firstName: 1,
			lastName: 1,
			_id: 0
		}).toArray((err, docs) => {
			console.log(JSON.stringify(docs[0]));
		});
		db.close();
	});
});