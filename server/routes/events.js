const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const yelpAuthKEY = require('../../config.js')._yelpAuthKEY;
const clientAuthID = require('../../config.js')._yelpAuthClientId;
const yelpKEY = require('../../config.js')._yelpEventKey;

const config = {
  headers: {
    'Authorization': `${yelpKEY}`,
  }
};

router.get('/', (req, res, next) => {
  axios(`https://api.yelp.com/v3/events?limit=25&radius=25&cll=37.7749,122.4194`, config)
    .then((found) => {
      console.log(found.data.events, 'found');
      res.json(found.data.events);
    }).catch((err) => {
      console.log(err);
    })
});

router.post('/', (req, res, next) => {
  //test for new york city

  // res.json('INSIDE FOOD!!');
});

module.exports.events = router;



