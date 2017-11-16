const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const uri = 'mongodb://localhost/budgetTrip';

mongoose.connect(uri, {
  useMongoClient: true,
  promiseLibrary: require('bluebird')
}).then(() => console.log('database connected'))
  .catch((err) => {console.log(err)});


var Trips = mongoose.Schema({
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
    user_id: Number,
    user_name: String,
    start_date: [Date],
    end_date: [Date],
    location: String,
    logs: [[]]
});

