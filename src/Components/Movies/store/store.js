const {Model} = require('mongoose');
const ModelDB = require('../model/dbModel');

function addMovies(movie){
		const myMovie = new ModelDB(movie);
		return myMovie.save();
};

async function getMovies(filterMovie){
		let filter = {};

		if(filterMovie !== null) filter = { movie: filterMovie };

		const movies = await ModelDB.find(filter)
		return movies
};

async function updateMovies(id, movie){
		const foundMovie = await ModelDB.findOne({
				_id: id
		});

		foundMovie.movie = movie;

		const newModifiquedMovie = await foundMovie.save();
		return newModifiquedMovie;	
};

function deleteMovies(id){
		return ModelDB.deleteOne({ _id: id })
};

module.exports = {
		addMovies,
		getMovies,
		updateMovies,
		deleteMovies
};


