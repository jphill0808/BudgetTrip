import React from 'react';

export default class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={this.props.restaurant.restaurant.thumb} alt={this.props.restaurant.restaurant.name} />
        <p>Address: {this.props.restaurant.restaurant.location.address}</p>
        <p>Restaurant: {this.props.restaurant.restaurant.name}</p>
        <p>Cuisine: {this.props.restaurant.restaurant.cuisines}</p>
        <p>Average Cost (For two): {this.props.restaurant.restaurant.average_cost_for_two}</p>
      </div>
    );
  }
}

/*
name;
location > address;
cuisines: 'Greek, Mediteranian';
average_cost_fo f;
r_two
*/
