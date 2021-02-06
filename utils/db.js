const mongoose = require('mongoose');

mongoose
	.connect(process.env.MongoURI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(client => {
		console.log('connected!');
	})
	.catch(err => console.log(err));
