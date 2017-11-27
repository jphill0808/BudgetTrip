import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  button: {
    margin: 10,
  },
  favoriteCheckbox: {
    marginBottom: 16,
  },
  block: {
    maxWidth: 250,
  },
  paper: {
    margin: 20,
    display: 'inline-block',
  },
};

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.addEvent = this.addEvent.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
  }

  addEvent() {
    const data = {
      user: this.props.user,
      event: this.props.event,
    };
    this.setState({ selected: [...this.state.selected, data.event] });
  }

  updateCheck(e) {
    let hold = e;
    this.setState(oldState => {
      return {
        checked: !oldState.checked,
      };
    });
    this.updateSelected(hold);
  }

  updateSelected(e) {
    let price;
    if (!parseFloat(this.props.event.cost)) {
      price = null;
    } else {
      price = this.props.event.cost;
    }
    let data = {
      id: `${this.props.id}`,
      name: `${this.props.event.name}`,
      description: `${this.props.event.description}`,
      price: `${this.props.event.cost}`,
      checked: `${!this.state.checked}`,
    };
    this.props.selector(data);
  }

  render() {
    return (
      <div>
        <Paper styles={styles.paper} zDepth={5}>
          <img src={this.props.event.image_url} alt={this.props.event.name} />
          <p>Event: {this.props.event.name}</p>
          <p>Category: {this.props.event.category}</p>
          <p>Description: {this.props.event.description}</p>
          <p>Cost: {this.props.event.cost}</p>
          <p>Start time: {this.props.event.time_start}</p>
          <p>End time: {this.props.event.time_end}</p>
          <Checkbox
            id={this.props.id}
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="Add Event"
            styles={styles.favoriteCheckbox}
            onCheck={e => {
              this.updateCheck(e);
            }}
          />
        </Paper>
      </div>
    );
  }
}
