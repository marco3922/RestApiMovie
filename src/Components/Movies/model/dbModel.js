const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dbSchema = new Schema({
		title: {
				type: String,
				require: true
		},		
		director: {
				type: String,
				require: true
		},
		year: {
				type: Date,
				default: Date.now()
		},
		raiting: Number,
});

const ModelDB= mongoose.model('Movies', dbSchema);

module.exports = ModelDB

