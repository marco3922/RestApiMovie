const router = require('../Components/Movies/network/network');

const routes = (server) => {
		server.use('/movie', router)
};

module.exports = routes;
