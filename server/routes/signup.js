const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const db = require('../../database/index.js');
const router = express.Router();

router.get('/', (req, res, next) => {

});

router.post('/', (req, res, next) => {
	console.log('storing data in DB!');
	res.end('USER DATA');
});

module.exports.signup = router;