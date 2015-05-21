import React from 'react';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';

export class Locations extends React.Component {

  constructor(props) {
    super(props);
    this.state = LocationStore.getState();
  }

  componentDidMount() {
    LocationActions.fetchLocations();
    LocationStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    // if (!this.state.locations.length) {
    //   return (
    //     <div>
    //       <img src="/my-cool-spinner.gif" />
    //     </div>
    //   )
    // }

    return (
      <ul>
        {this.state.locations.map((location) => {
          return (
            <li key={location.id}>
              {location.name}
            </li>
          );
        })}
      </ul>
    );
  }
};
