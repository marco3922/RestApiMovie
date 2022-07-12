exports.success = (req, res, message, status) =>{
		res.status(status || 200).send({
				body: message,
				error: '',
		})
};

exports.error= (req, res, message, status) =>{
		res.status(status || 500).send({
				body: '',
				error: message,
		})
};

