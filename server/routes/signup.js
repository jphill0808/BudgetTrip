const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const db = require('../../database/index.js').User;
const router = express.Router();

router.get('/', (req, res, next) => {

});

router.post('/', (req, res, next) => {
	var name = req.body.name;
	var location = req.body.location.name;
	var email = req.body.email;

	console.log(location);
	var user = new db({
		username: name,
		email: email,
		location: location
	});

	user.save((err, user) => {
		if (err) { console.log(err) } 
		else { console.log(user) }
	})

	res.end('USER DATA');
});

module.exports.signup = router;