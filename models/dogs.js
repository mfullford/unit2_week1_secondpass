const mongoose = require('mongoose');

const DogSchema = mongoose.Schema({
	name: String,
	breed: String,
	age: Number,
});

Dog = mongoose.model('Dog', DogSchema);

module.exports = Dog;
