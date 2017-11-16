const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');



router.get('/', (req, res, next) => {
  res.send('It works!');
});

router.post('/', (req, res, next) => {

});


module.exports.travel = router;



