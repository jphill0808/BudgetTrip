import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.addPlace = this.addPlace.bind(this);
  }

  addPlace() {
    const data = {
      user: this.props.user,
      travel: this.props.travel.place,
    };
    axios.post('http://127.0.0.1:1130/api/travel/add', data).then(data => {
      console.log('clicked data =============>', data);
    });
  }

  render() {
    return (
      <div>
        <img src={this.props.travel.place.picture} alt={this.props.travel.place.name} />
        <h3>{this.props.travel.place.name}</h3>
        <p>{this.props.travel.place.perex}</p>
        <p>{this.props.travel.place.admission}</p>
        <p>{this.props.travel.place.star_rating}</p>
        <p>{this.props.travel.place.opening_hours}</p>
        <RaisedButton onClick={this.addPlace} label="Add Place" primary={true} />
      </div>
    );
  }
}

export default Travel;
