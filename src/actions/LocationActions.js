import { alt } from '../alt';
import {LocationsFetcher} from '../utils/LocationsFetcher';

class LocationActions {

  updateLocations(locations) {
    this.dispatch(locations);
  }

  fetchLocations() {
    // we dispatch an event here so we can have "loading" state.
    this.dispatch();

    LocationsFetcher.fetch()
      .then((locations) => {
        // we can access other actions within our action through `this.actions`
        this.actions.updateLocations(locations);
      })
      .catch((errorMessage) => {
        this.actions.locationsFailed(errorMessage);
      });
  }

  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  favoriteLocation(locationId) {
    this.dispatch(locationId);
  }

}

export default alt.createActions(LocationActions);
