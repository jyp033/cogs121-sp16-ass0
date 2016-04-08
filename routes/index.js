var models = require('../models');

exports.view = function(req, res) {
	models.Message.find().exec(renderMessage);
    
    function renderMessage(err, message) {
    	if(err) console.log(err);
   		res.render("index", {'data': message} );
	}
}
