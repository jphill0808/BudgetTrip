const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const db = require('../../database/index.js').User;
const router = express.Router();

router.get('/', (req, res, next) => {

});

router.post('/', (req, res, next) => {
	let data = {
		username: req.body.name,
		email: req.body.email
	}

	if (!req.body.hasOwnProperty('location')) {
		data.location = 'Oakland, California';
	} else {
		data.location = req.body.location.name;
	}

	var user = new db(data);

	user.save((err, user) => {
		if (err) { console.log(err) }
		else { console.log(user) }
	})

	res.send(data);
});

module.exports.signup = router;