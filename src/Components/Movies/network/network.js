const express = require('express');
const controller = require('../Controller/controller');
const response = require('../../../network/response');
const router = express.Router();

router.get('/', (req, res) => {
		const filterMovies = req.body.movie || null;
		controller.get(filterMovies)
				.then((message) => {
						response.success(req, res, message, 200)
				})
				.catch( e => {
						response.error(req, res, e, 500)
				} )
});

router.post('/', (req, res) => {

		const {director, title, raiting} = req.body;

		controller.add(director, title, raiting)
				.then( (fullMessage) => {
            response.success(req,res, fullMessage, 'Creado correctamente', 201)
        })
        .catch( () => {
            response.error(req,res, 'Informacion invalida', 400)
        } )
});

router.patch('/:id', (req, res) => {

		controller.updateM(req.params.id, req.body.director, req.body.title)
				.then( (data) => {
						response.success(req, res, data, 200)
				})
				.catch( () => {
						response.error(req, res, 'Error interno', 500)
				})
				
});

router.delete('/:id', (req, res) => {
		controller.deleteM(req.params.id)
				.then( () => {
						response.success(req, res, `Movie ${req.params.id} elaminada`, 200)
				} )
			.catch( () => {
						response.error(req, res, 'Error interno', 500)
				})
});

module.exports = router;
