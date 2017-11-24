const express = require('express');

const router = express.Router();
const axios = require('axios');
const sygicKEY = require('../../config.js')._sygicKEY;

router.get('/', (req, res, next) => {
  res.json('INSIDE TRAVEL!');
});

// TODO: figure out a path for search
router.post('/search', (req, res, next) => {
  console.log('REQUEST BODY ------->', req.body);
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
            return {
              placeId: {
                name: response.data.data.place.name,
                perex: response.data.data.place.perex,
                email: response.data.data.place.email,
                phone: response.data.data.place.phone,
                admission: response.data.data.place.admission,
                star_rating: response.data.data.place.star_rating,
                opening_hours: response.data.data.place.opening_hours,
                picture: response.data.data.place.main_media.media[0].url,
              },
            };
          })
          .catch(err => {
            console.log(err);
          });
      });

      axios.all(placePromise).then(results => {
        console.log(results);
      });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports.travel = router;

