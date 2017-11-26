import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

export default class Food extends React.Component {
  constructor(props) {
    super(props);
    this.addFood = this.addFood.bind(this);
  }

  addFood() {
    const data = {
      user: this.props.user,
      food: this.props.restaurant.restaurant,
    };
    axios.post('http://127.0.0.1:1130/api/food/add', data).then(data => {
      console.log('clicked the food item;');
    });
  }

  render() {
    return (
      <div>
        <img src={this.props.restaurant.restaurant.thumb} alt={this.props.restaurant.restaurant.name} />
        <p>Address: {this.props.restaurant.restaurant.location.address}</p>
        <p>Restaurant: {this.props.restaurant.restaurant.name}</p>
        <p>Cuisine: {this.props.restaurant.restaurant.cuisines}</p>
        <p>Average Cost (For two): {this.props.restaurant.restaurant.average_cost_for_two}</p>
        <RaisedButton onClick={this.addFood} label="Add Food" primary={true} />
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
