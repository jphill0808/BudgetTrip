const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const zomatoKEY = require('../../config.js')._zomatoKEY;

const config = {
  headers: { 'user-key': `${zomatoKEY}` },
};

router.post('/search', (req, res, next) => {
  const lat = req.body.lat;
  const lng = req.body.lng;
  axios(`https://developers.zomato.com/api/v2.1/search?count=25&lat=${lat}&lon=${lng}&radius=25`, config)
    .then(found => {
      res.send(found.data.restaurants);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/', (req, res, next) => {
  //test for new york city
  // res.json('INSIDE FOOD!!');
});

module.exports.food = router;
