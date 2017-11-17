import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: null,
      location: null,
      startingDate: null,
      endDate: null
    };
  }

  onChange(){
    e.target.value
  }

  search(event) {
    event.preventDefault();


  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.search} action="/search" method="POST">
          <label htmlFor="budget">Budget</label>
          <input type="text" name="budget" onChange={this.onChange.bind(this)}/>
          <label htmlFor="location">Location</label>
          <input type="text" align="right" name="location" />
          <label htmlFor=""></label>
          <input type="date" name="start-date" />
          <label htmlFor=""></label>
          <input type="date" name="end-date" />
          <button type="submit" value="Submit"> Submit </button>
        </form>
      </div>
    );
  }
}