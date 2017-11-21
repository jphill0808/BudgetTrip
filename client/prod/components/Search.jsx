import React from 'react';
import Paper from 'material-ui/Paper';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';
import TextField from 'material-ui/TextField';

const axios = require('axios');

const style = {
  paper: {
    height: 500,
    width: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
  container: {
    width: 100,
  },
};

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: '',
      location: '',
      startDate: '',
      endDate: '',
    };
    this.onChange = (input) => {
      this.setState({input})
    }
    this.monitor = this.monitor.bind(this);
    this.search = this.search.bind(this);

  }

  monitor(event, newVal) {
/*    const target = event.target.value;
    console.log(target);
    const name = event.target.name;
    console.log('name: ', name);
*/  this.setState(() => {
      return {
        location: newVal,
      };
    });
    console.log(this.state.location);
  }

  search(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'localhost:1130/search',
      data: {
        budget: this.state.budget,
        location: this.state.location,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      },
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {
    console.log('location: ', this.state.location);
    var inputProps = {
      value: this.state.location,
      onChange: this.onChange,
      type: 'search',
      autoFocus: true
    }
    return (
      <div className="container" style={style.container}>
        <Paper style={style.paper} zDepth={2}>
          <h2>Where do you want to go today?</h2>
          <form onSubmit={this.search} autoComplete="off">
            <label htmlFor="budget">Budget</label>
            <input
              type="text"
              name="budget"
              onChange={this.monitor}
              value={this.state.budget}
            />
            <label htmlFor="location">Location</label>
            <TextField
              id="nameField"
              name="location"
              floatingLabelText="Name"
              value={this.state.location}
              onChange={(e, newVal) => {this.monitor(e, newVal)}}
            />
            <PlacesAutocomplete inputProps={inputProps} />
            <input
              type="text"
              name="location"
              id="location"
              onChange={this.monitor}
              value={this.state.location}
            />
            <label htmlFor="start-date"></label>
            <input
              type="date"
              name="startDate"
              onChange={this.monitor}
              value={this.state.startDate}
            />
            <label htmlFor="end-date"></label>
            <input
              type="date"
              name="endDate"
              onChange={this.monitor}
              value={this.state.endDate}
            />
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </Paper>
      </div>
    );
  }
}

