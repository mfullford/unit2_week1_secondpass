const mongoose = require('mongoose');

const CatSchema = mongoose.Schema({
	name: String,
	breed: String,
	age: Number,
});

Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat;