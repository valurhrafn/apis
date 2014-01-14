module.exports = function (app) {
	var price = require('../../modules/price');
	app.get('/kronan/:barcode', 3600, function (req, callback) {
		console.log('hitting')
		price.kronan(req.params.baracode, callback)
	});
};