var path = require('path');

var travel = require('./routes/travel.js').travel;
var food = require('./routes/food.js').food;
var events = require('./routes/events.js').events;
var signup = require('./routes/signup.js').signup;
var searchData = require('./routes/search-data.js').searchData;

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());


const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const port = process.env.PORT || 5422;


const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}));

app.use(webpackHotMiddleware(compiler));



app.use('/api/travel', travel);
app.use('/api/food', food);
app.use('/api/events', events);
app.use('/api/signup', signup);
app.use('/api/search-data', searchData);

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/../client/dist/index.html'))
})

app.listen(1130, () => {
  console.log('Express is listening on port 1130');
});
