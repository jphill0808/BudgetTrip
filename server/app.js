var travel = require('./routes/travel.js').travel;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use('/api/travel', travel);

app.get('/', (req, res) => {
  res.json('hello world');
});




app.listen(1130, () => {
  console.log('Express is listening on port 1130');
});
