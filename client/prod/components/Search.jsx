import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <label htmlFor="budget">Budget</label>
        <input type="text" name="budget" />
        <label htmlFor="location">Location</label>
        <input type="text" align="right" name="location" />
        <label htmlFor=""></label>
        <input type="date"/>
        <label htmlFor=""></label>
        <input type="date"/>
        <button type="submit" value="Submit">Submit</button>
      </div>
    );
  }
}