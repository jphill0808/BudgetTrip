const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const uri = 'mongodb://localhost/budgetTrip';

mongoose
  .connect(uri, {
    useMongoClient: true,
    promiseLibrary: require('bluebird'),
  })
  .then(() => console.log('database connected'))
  .catch(err => {
    console.log(err);
  });

var Users = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  location: String,

  trips: {
    input_budget: Number,
    budget_remaining: Number,
    location: String,
    start_date: [Date],
    end_date: [Date],
    activities: [
      new mongoose.Schema({
        name: { type: String, unique: true },
        description: String,
        price: Number,
      }),
    ],
    logs: [[]],
  },

  tripsHistory: [],
});

var User = mongoose.model('user', Users);

let saveUser = (user, cb) => {
  let newUser = new User({
    username: user.username,
    email: user.email,
    location: user.location,
  });

  newUser.trips.activities.push({
    name: 'Palo Alto Museum',
    description: 'Dusty books',
    price: 25,
  });
  newUser.trips.activities.push({
    name: 'Palo Alto Beach',
    description: 'In the sun',
    price: 5,
  });

  newUser.save((err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log(data);
    }
  });
};

const saveActivity = (user, activity) => {
  // console.log('user in database::::::::: ', user);
  console.log('activity in database::::::::: ', activity);
  // find the user based on the user parameter

  User.findOne({ username: user }).exec((error, person) => {
    console.log('person found!!!!!!', person);
    person.trips.activities.push(activity);
    person.save((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('saved the data: ', data);
      }
    });
  });
  // When found
  // Update the database with acitivity
};

/*var sampleUser = {
  username: 'Mark',
  email: 'Markus1998@yahoo.com',
  location: 'Sandy Springs'
}
saveUser(sampleUser, (err, data) => {
  if (err) console.log(err);
});
*/

module.exports = {
  User,
  saveActivity,
};
