import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 10,
};

export default class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={this.props.event.image_url} alt={this.props.event.name} />
        <p>Event: {this.props.event.name}</p>
        <p>Category: {this.props.event.category}</p>
        <p>Description: {this.props.event.description}</p>
        <p>Start time: {this.props.event.time_start}</p>
        <p>End time: {this.props.event.time_end}</p>
        <RaisedButton label="Add Event" primary={true} style={style} />
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
