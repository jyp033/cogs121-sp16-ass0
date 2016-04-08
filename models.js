var Mongoose = require('mongoose');

var paschema = new Mongoose.Schema({
	// fields are defined here
    "email": String,
    "content": String,
    "created": Date
});