const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const zomatoKEY = require('../../config.js')._zomatoKEY;
const saveActivity = require('../../database/index.js').saveActivity;

const config = {
  headers: { 'user-key': `${zomatoKEY}` },
};

router.post('/add', (req, res, next) => {
  console.log('REQ BODY OF FOOD IS HEREEEEEEEEEEEEEE: ', JSON.stringify(req.body, null, 2));
  const user = req.body.user.username;
  const food = {
    name: req.body.food.name,
    description: req.body.food.cuisine,
    price: null,
  };
  saveActivity(user, food);
});

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
