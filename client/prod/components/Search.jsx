import React from 'react';
import Paper from 'material-ui/Paper';
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
    this.onChange = input => {
      this.setState({ input });
    };
    this.monitor = this.monitor.bind(this);
    this.search = this.search.bind(this);
  }

  monitor(event) {
    const target = event.target;
    const name = target.name;

    this.setState(() => {
      return {
        [name]: target.value,
      };
    });

    if (name === 'location') {
      this.locationAutoComplete(event);
    }
  }

  locationAutoComplete(event) {
    let input = event.target;
    if (!input) return;

    const suggestion = new google.maps.places.Autocomplete(input);
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
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container" style={style.container}>
        <Paper style={style.paper} zDepth={2}>
          <h2>Where do you want to go today?</h2>
          <form onSubmit={this.search} autoComplete="off">
            <label htmlFor="budget">Budget</label>
            <input type="text" name="budget" onChange={this.monitor} value={this.state.budget} />
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" onChange={this.monitor} value={this.state.location} />
            <label htmlFor="start-date" />
            <input type="date" name="startDate" onChange={this.monitor} value={this.state.startDate} />
            <label htmlFor="end-date" />
            <input type="date" name="endDate" onChange={this.monitor} value={this.state.endDate} />
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </Paper>
      </div>
    );
  }
}
