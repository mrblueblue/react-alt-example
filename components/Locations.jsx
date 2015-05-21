var React = require('react');
var LocationStore = require('../stores/LocationStore');

class Locations extends React.component {

  constructor() {
    this.state = LocationStore.getState();
  }

  componentDidMount() {
    LocationStore.listen(this.onChange);
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    
    if (!this.state.locations.length) {
      return (
        <div>
          <img src="/my-cool-spinner.gif" />
        </div>
      )
    }

    return (
      <ul>
        {this.state.locations.map((location) => {
          return (
            <li>{location.name}</li>
          );
        })}
      </ul>
    );
  }
};

module.exports = Locations;
