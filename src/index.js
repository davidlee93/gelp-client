import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './containers/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

// const GOOGLE_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
// const GOOGLE_PLACE_SEARCH_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
// const GOOGLE_PLACE_DETAILS_URL = 'https://maps.googleapis.com/maps/api/place/details/json?';

// function initMap(location) {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 8,
//         center: {lat: `${location.lat}`, lng: `${location.lng}`}
//     });
// }

// function getDataFromGeocodeApi(searchLocation, callback) {
//     const query = {
//         'address': `${searchLocation}`,
//         'key': 'AIzaSyDqCUlkl2tTiCdR4VesmoMW47j7mLRTbhM'
//     };
//     $.getJSON(GOOGLE_GEOCODE_URL, query, callback);
// }

// function getDestinationLatLngData(data) {
//     console.log(data.results[0].geometry.location);
//     const destinationLocation = data.results[0].geometry.location;
//     hitPlaceSearchApi(destinationLocation, getPlaceId);
//     initMap(destinationLocation);
// }

// function hitPlaceSearchApi(location, callback) {
//     console.log("PlaceSearchApi");
//     const params = {
//         'location': `${location.lat},${location.lng}`,
//         'keyword': `${querySearch}`,
//         'radius': '8000',
//         'key': 'AIzaSyDqCUlkl2tTiCdR4VesmoMW47j7mLRTbhM'
//     };
//     $.getJSON(GOOGLE_PLACE_SEARCH_URL, params, callback);
// }

// function getPlaceId(placeSearchdata) {
//     const place_ids = [];
//     for (var i = 0; i < placeSearchdata.results.length; i++) {
//         place_ids.push(placeSearchdata.results[i].place_id);
//     }
//     hitPlaceDetailsApi(place_ids, displayPlaces);
// }

// function hitPlaceDetailsApi(placeIds, callback) {
//     $.getJSON(GOOGLE_PLACE_DETAILS_URL, placeIds[0], callback);
// }

// function displayPlaces (PlaceDetailsData) {
//     const address = PlaceDetailsData.result.formatted_address.split(', ');
//     $(".address").html(
//         `<p>${address[0]}</p>
//         <p>${address[1]}</p>`
//     );
// }

// let querySearch;
// function watchSearchSubmit() {
//     $('.search-form').submit(event => {
//         event.preventDefault();
//         const categoryTarget = $(event.currentTarget).find('.category');
//         const destinationTarget = $(event.currentTarget).find('.location');
//         querySearch = categoryTarget.val();
//         const queryDestination = destinationTarget.val();
//         /*// clear out the inputs*/
//         categoryTarget.val("");
//         destinationTarget.val("");
//         // to get latitude and longitude coordinates for Google Places API
//         getDataFromGeocodeApi(queryDestination, getDestinationLatLngData);
//     });
// }
  
  
// $(watchSearchSubmit);