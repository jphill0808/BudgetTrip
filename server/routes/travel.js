const express = require('express');
const router = express.Router();
const axios = require('axios');
const sygicKEY = require('../../config.js')._sygicKEY;
const saveActivity = require('../../database/index.js').saveActivity;

router.get('/', (req, res, next) => {
  res.json('INSIDE TRAVEL!');
});

router.post('/add', (req, res, next) => {
  // console.log('REQUEST BODY on ADD PLACE', req.body);
  //req.body ---> {user, activity }
  const user = req.body.user.username;
  const activity = {
    name: req.body.travel.name,
    description: req.body.travel.perex,
    price: null,
  };
  // console.log('user: ', user);
  // console.log('activity: ', activity);
  saveActivity(user, activity);
});

// TODO: figure out a path for search
router.post('/search', (req, res, next) => {
  // console.log('REQUEST BODY ------->', req.body);
  const lat = req.body.lat;
  const lng = req.body.lng;
  const config = {
    headers: { 'x-api-key': sygicKEY },
  };
  const detectParentsUrl = `https://api.sygictravelapi.com/1.0/en/places/detect-parents?location=${lat},${lng}`;
  return axios
    .get(detectParentsUrl, config)
    .then(response => {
      return response.data.data.places[0].bounding_box;
    })
    .then(boundingBox => {
      const placesUrl = `https://api.sygictravelapi.com/1.0/en/places/list?bounds=${boundingBox.south},
      ${boundingBox.west}, ${boundingBox.north}, ${
        boundingBox.east
      }&categories=discovering|going_out|hiking|playing|relaxing|shopping|sightseeing|doing_sports|traveling`;

      return axios
        .get(placesUrl, config)
        .then(response => {
          return response.data.data.places.map(element => {
            return element.id;
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .then(placesId => {
      const placeDetailsUrl = 'https://api.sygictravelapi.com/1.0/en/places/';
      const placePromise = placesId.map(placeId => {
        return axios
          .get(placeDetailsUrl + placeId, config)
          .then(response => {
            const placeId = response.data.data.place.id;
            const name = response.data.data.place.name;
            const perex = response.data.data.place.perex;
            const email = response.data.data.place.email;
            const phone = response.data.data.place.phone;
            const admission = response.data.data.place.admission;
            const star_rating = response.data.data.place.star_rating;
            const opening_hours = response.data.data.place.opening_hours;
            const picture = !response.data.data.place.main_media
              ? 'Not Available'
              : response.data.data.place.main_media.media[0].url;
            return {
              place: {
                placeId,
                name,
                perex,
                email,
                phone,
                admission,
                star_rating,
                opening_hours,
                picture,
              },
            };
          })
          .catch(err => {
            console.log(err);
          });
      });

      axios.all(placePromise).then(results => {
        // console.log('RESULTS-------->', results);
        res.json(results);
      });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports.travel = router;
