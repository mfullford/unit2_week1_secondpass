const express = require('express');
const app = express();

bodyParser = require('body-parser');

app.get('/', function(req, res) {
	res.send("Hello");
});

let db = require('./models');


app.get('/pets/new', function(req, res) {
	res.sendFile(__dirname + '/public/newpet.html');
});

app.post('/pets/new', function (req, res) {
	var newPet = new db.Pet({
		name: req.body.name,
		breed: req.body.breed,
		age: req.body.age
	});
});



app.listen(3000, function () {
  console.log('Started server at http://localhost:3000/');
});