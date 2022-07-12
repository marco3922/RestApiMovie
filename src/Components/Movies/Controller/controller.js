const {all} = require('express/lib/application');
const store = require('../store/store');

const addMovies= (director, title, raiting) => {
	return new Promise((res, rej) => {
				if(!director && !title) rej('Los datos son incorrectos');
				
				const allMovie = {
						director,
						title,
						raiting,
						year: new Date()
				}

				store.addMovies(allMovie)
				
				res(allMovie);
		})
};

const getMovies = (filterMovie) => {
		return new Promise((res, rej) => {
				res(store.getMovies(filterMovie))
		})
};

const updateMovies = (id, director, title) => {
		return new Promise( async(res, rej) => {
				if(!id || !director || !title){
						rej('Datos invalidos');
						return false;
				}

				const result = await store.updateMovies(id, director, title);

				res(result)
		})
};

const deleteMovies = (id) => {
		return new Promise((res, rej) => {
				if(!id){
						rej('Id invalido');
						return false;
				}

				store.deleteMovies(id)
						.then(()=> res())
						.catch( e => rej(e) )
		})
};

module.exports = {
		add: addMovies,
		get: getMovies,
		updateM: updateMovies,
		deleteM: deleteMovies
};
