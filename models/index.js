const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pets_db');

module.exports.Dog = require('./dogs.js');

module.exports.Cat = require('./cats.js');
