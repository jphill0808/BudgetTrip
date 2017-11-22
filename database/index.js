const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const uri = 'mongodb://localhost/budgetTrip';

mongoose.connect(uri, {
  useMongoClient: true,
  promiseLibrary: require('bluebird')
}).then(() => console.log('database connected'))
  .catch((err) => {console.log(err)});


var Users = mongoose.Schema({
  username: { type: String, unique: true},
  email: { type: String, unique: true },
  location: String,
  trips: {
    budget: {
      input_budget: Number,
      budget_remaining: Number,
      itenerary: {
        lodging: {
          name: String,
          cost: Number,
          location: String
        },
        events: {
          name: String,
          cost: Number,
          time: Date,
          location: String
        },
        travel: {
          origin: String,
          destination: String,
          flying: { type: Boolean, default: false },
          cost: Number
        }
      }
    },
    start_date: [Date],
    end_date: [Date],
    location: String,
    logs: [[]]
  }
});

var User = mongoose.model('user', Users);

module.exports.User = User;