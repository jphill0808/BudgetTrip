import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: null,
      location: null,
      startDate: null,
      endDate: null
    };

    this.monitor = this.monitor.bind(this);
    this.search = this.search.bind(this);
  }

  monitor(event) {
    const target = event.target;
    const name = target.name;

    this.setState(() => {
      return {
        [name]: target.value
      };
    });
  }

  // search(event) {
  //   event.preventDefault();
  //   axios({
  //     method: 'post',
  //     url: 'localhost:1130/search',
  //     data: {
  //       budget: this.state.budget,
  //       location: this.state.location,
  //       startDate: this.state.startDate,
  //       endDate: this.state.endDate
  //     }
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });


  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.search} autoComplete='off'>
          <label htmlFor="budget">Budget</label>
          <input type="text" name="budget" onChange={this.monitor} value={this.state.budget}/>
          <label htmlFor="location">Location</label>
          <input type="text" align="right" name="location" onChange={this.monitor} value={this.state.location}/>
          <label htmlFor=""></label>
          <input type="date" name="start-date" onChange={this.monitor} value={this.state.startDate}/>
          <label htmlFor=""></label>
          <input type="date" name="end-date" onChange={this.monitor} value={this.state.endDate}/>
          <button type="submit" value="Submit"> Submit </button>
        </form>
      </div>
    );
  }
}