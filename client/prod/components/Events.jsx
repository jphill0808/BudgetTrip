import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

const style = {
  margin: 10,
};

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addEvent = this.addEvent.bind(this);
  }

  addEvent() {
    const data = {
      user: this.props.user,
      event: this.props.event
    };
    axios.post('http://127.0.0.1:1130/api/events/add', data)
      .then(data => {
        console.log('clicked the event: ', data);
      });
  }

  render() {
    return (
      <div>
        <img src={this.props.event.image_url} alt={this.props.event.name} />
        <p>Event: {this.props.event.name}</p>
        <p>Category: {this.props.event.category}</p>
        <p>Description: {this.props.event.description}</p>
        <p>Cost: {this.props.event.cost}</p>
        <p>Start time: {this.props.event.time_start}</p>
        <p>End time: {this.props.event.time_end}</p>
        <RaisedButton onClick={this.addEvent}label="Add Event" primary={true} style={style} />
      </div>
    );
  }
}

//Possible data:
/*
name
category
description
image_url
location > address1
           address2
           add3
           city
time_start
time_end
*/
