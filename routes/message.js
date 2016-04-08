var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here
    var newMessage;
    var date = new Date();
    if (req.body.email && req.body.content) {
    	newMessage = new modes.Message({
    		'email': req.body.email,
    		'content': req.body.content,
    		'created': date.getDate()
    	});
    	newMessage.save(function (err) {
    		if(err) console.log(err);
    		res.redirect('/');
    	});
    }
};