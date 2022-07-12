const db = require('mongoose');

function connectToDB(url){
		db.connect(url, {
				useNewUrlParser: true
		}, () => console.log('Connect to the DB')
		);
}

module.exports = connectToDB;
