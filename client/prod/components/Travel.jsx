import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <RaisedButton label="Add" primary={true} />
      </div>
    );
  }
}

export default Travel;
