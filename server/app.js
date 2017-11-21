var travel = require('./routes/travel.js').travel;
var food = require('./routes/food.js').food;
var events = require('./routes/events.js').events;

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use('/api/travel', travel);
app.use('/api/food', food);
app.use('/api/events', events);


app.get('/', (req, res) => {
  res.json('hello world');
});




app.listen(1130, () => {
  console.log('Express is listening on port 1130');
});
