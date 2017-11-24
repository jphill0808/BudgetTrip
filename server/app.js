var travel = require('./routes/travel.js').travel;
var food = require('./routes/food.js').food;
var events = require('./routes/events.js').events;
var signup = require('./routes/signup.js').signup;

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use('/api/travel', travel);
app.use('/api/food', food);
app.use('/api/events', events);
app.use('/api/signup', signup);

app.get('/', (req, res) => {
  res.json('hello world');
});

app.listen(1130, () => {
  console.log('Express is listening on port 1130');
});
