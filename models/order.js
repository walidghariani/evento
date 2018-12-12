var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var even = new Schema({
    nom:String,
	type:[{titre:String}],
	category:[{titre:String}],
	organisateur:String,
	userid:{type:mongoose.Schema.Types.ObjectId,
			ref:'userschema'},
	adresse:String
});



module.exports = mongoose.model('event', even);