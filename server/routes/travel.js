const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');



router.get('/', (req, res, next) => {
  res.json('INSIDE TRAVEL!');
});

router.post('/', (req, res, next) => {

});


module.exports.travel = router;



