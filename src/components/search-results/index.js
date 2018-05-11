import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {searchSuccess, searchInputs} from '../../actions/search';
import Spinner from 'react-spinkit';
import './search-results.css';

export class SearchResults extends React.Component {
    state = {results: null};
    componentDidMount() {
        const google = window.google
    
        var map;
        var service;
        var infowindow = new google.maps.InfoWindow();
        
        var latLng = this.props.location;
        var near = new google.maps.LatLng(latLng);
        var find = this.props.keyword;
        map = new google.maps.Map(document.getElementById('map'), {
            center: near,
            zoom: 12
        });
    
        var request = {
            location: near,
            keyword: find,
            radius: '8500',
            type: ['restaurant']
        };
    
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, this.callback);
        service.nearbySearch(request, createMarker);

        function createMarker(place) {
            for (var i = 0; i < place.length; i++) {
                var placeLoc = place[i].geometry.location;
                var content = 
                `<div><h3>${place[i].name}</h3></div>
                <div>${place[i].vicinity}</div>
                <br>
                <div>Open now: ${place[i].opening_hours.open_now ? 'Yes' : 'No'}</div>`
                var marker = new google.maps.Marker({
                    map: map,
                    position: placeLoc,
                    info: content
                });
                
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(this.info);
                    infowindow.open(map, this);
                });
            }
         }
    }

    callback = (results, status) => {
        console.log('callback fired')
        this.setState({results})
        this.props.dispatch(searchSuccess({results}))
        // if (status == window.google.maps.places.PlacesServiceStatus.OK) {
        //     for (var i = 0; i < results.length; i++) {
        //         var place = results[i];
        //         createMarker(place);
        //     }
        // }
    }

    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnerName="circle" noFadeIn />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }
        
        const restaurants = this.state.results.map((restaurant, index) =>
            <li className="search-results" key={index}>
                <div className="img"><img src={restaurant.icon}/></div>
                <div className="info">
                    <h3><Link to="place" id={restaurant.place_id}>{restaurant.name}</Link></h3>
                    <h4>Rating:{restaurant.rating}</h4>
                    <p>Open now: {restaurant.opening_hours.open_now ? 'Yes' : 'No'}</p>
                </div>
                <div className="address">
                    <p>{restaurant.vicinity}</p>
                </div>
            </li>
        );
        
        return (
            <ul className="restaurant-search-results">
                {restaurants}
            </ul>
        );
    }

    render() {
        if (!this.state.results)  {
            return false
        }
        return(
            <ul className="search-results-list">
                {this.renderResults()}
                <li className="search-results">
                    <div className="img">img</div>
                    <div className="info">
                        <h3><a href="#">Place 4</a></h3>
                        <h4>Ratings</h4>
                        <p>stars</p>
                    </div>
                    <div className="address">
                        <p>address</p>
                    </div>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    keyword: state.search.keyword,
    location: state.search.location,
    findings: state.search.findings
});
export default connect(mapStateToProps)(SearchResults);