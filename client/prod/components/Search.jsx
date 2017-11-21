import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

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
  button: {
    margin: 15,
  },
};

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    maxDate.setFullYear(maxDate.getFullYear() + 1);

    this.state = {
      budget: '',
      location: '',
      startDate: minDate,
      endDate: maxDate,
    };
    this.onChange = input => {
      this.setState({ input });
    };
    this.monitor = this.monitor.bind(this);
    this.search = this.search.bind(this);
    this.handleChangeMinDate = this.handleChangeMinDate.bind(this);
    this.handleChangeMaxDate = this.handleChangeMaxDate.bind(this);
    // this.handleDate = this.handleDate.bind(this);
  }

  handleChangeMinDate(event, date) {
    this.setState({
      startDate: date,
    });
  }

  /*  handleDate(event, date) {
    console.log('event: ', event);
    const pickedDate = event.target.name;
    console.log('pickedDate', pickedDate);
    this.setState({
      [pickedDate]: date,
    });
  }*/

  handleChangeMaxDate(event, date) {
    this.setState({
      endDate: date,
    });
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
    const input = event.target;
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
        autoOk: true,
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
    console.log(this.state);
    return (
      <div className="container" style={style.container}>
        <Paper style={style.paper} zDepth={2}>
          <h2>Where do you want to go today?</h2>
          <form autoComplete="off">
            <TextField
              name="budget"
              floatingLabelText="Budget Amount"
              onChange={this.monitor}
              value={this.state.budget}
            />
            <TextField
              name="location"
              floatingLabelText="Location"
              id="location"
              onChange={this.monitor}
              value={this.state.location}
            />
            <DatePicker
              name="startDate"
              floatingLabelText="Start Date"
              autoOk={true}
              onChange={this.handleChangeMinDate}
              value={this.state.startDate}
            />
            <DatePicker
              name="endDate"
              onChange={this.handleChangeMaxDate}
              autoOk={true}
              floatingLabelText="End Date"
              value={this.state.endDate}
            />

            <RaisedButton label="Submit" primary={true} onClick={this.search} style={style.button} value="Submit" />
          </form>
        </Paper>
      </div>
    );
  }
}
