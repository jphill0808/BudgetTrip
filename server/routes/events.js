const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const yelpAuthKEY = require('../../config.js')._yelpAuthKEY;
const clientAuthID = require('../../config.js')._yelpAuthClientId;
const yelpKEY = require('../../config.js')._yelpEventKey;
const saveActivity = require('../../database/index.js').saveActivity;

const config = {
  headers: {
    Authorization: `${yelpKEY}`,
  },
};

router.post('/add', (req, res, next) => {
  console.log('got the events')
  console.log(req.body.event)
  const user = req.body.user.username;
  const event = {
    name: req.body.event.name,
    description: req.body.event.description,
    price: req.body.event.cost || null
  };
  saveActivity(user, event);

})
router.post('/search', (req, res, next) => {
  const lat = req.body.lat;
  const lng = req.body.lng;
  axios(`https://api.yelp.com/v3/events?limit=25&radius=25&latitude=${lat}&&longitude=${lng}`, config)
    .then(found => {
      // console.log(found.data.events, 'found');
      res.json(found.data.events);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/', (req, res, next) => {
  //test for new york city
  // res.json('INSIDE FOOD!!');
});

module.exports.events = router;
