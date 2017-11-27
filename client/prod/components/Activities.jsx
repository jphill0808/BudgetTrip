import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Travel from './Travel.jsx';
import Food from './Food.jsx';
import Events from './Events.jsx';

const styles = {
  headline: {
    fontSize: 20,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class Activities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Travel">
            <div>
              {this.props.activities.travel.map(travel => {
                return (
                  <Travel
                    id={travel.place.placeId}
                    key={travel.place.placeId}
                    travel={travel}
                    user={this.props.user}
                    selector={this.props.selector}
                  />
                );
              })}
            </div>
          </Tab>
          <Tab label="Food">
            <div>
              {this.props.activities.food.map(restaurant => {
                return (
                  <Food
                    id={restaurant.restaurant.id}
                    key={restaurant.restaurant.id}
                    restaurant={restaurant}
                    user={this.props.user}
                    selector={this.props.selector}
                  />
                );
              })}
            </div>
          </Tab>
          <Tab label="Events">
            <div>
              {this.props.activities.events.map(event => {
                return (
                  <Events
                    id={event.id}
                    key={event.id}
                    event={event}
                    user={this.props.user}
                    selector={this.props.selector}
                  />
                );
              })}
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
