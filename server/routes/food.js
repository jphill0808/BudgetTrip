const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const zomatoKEY = require('../../config.js')._zomatoKEY;

const config = {
  headers: {'user-key': `${zomatoKEY}`}
};

router.get('/', (req, res, next) => {
  axios(`https://developers.zomato.com/api/v2.1/search?count=25&lat=40&lon=74&radius=25`, config)
    .then((found) => {
      res.send(found.data.restaurants)
    }).catch((err) => {
      console.log(err);
    })
});

router.post('/', (req, res, next) => {
  //test for new york city

  // res.json('INSIDE FOOD!!');
});



module.exports.food = router;



