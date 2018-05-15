import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {searchSuccess} from '../../actions/search';
import Spinner from 'react-spinkit';
import styled from 'styled-components';
import './search-results.css';


const StyledLink = styled(Link)`
    color: #0073bb;
    font-family: Helvetica, Arial, sans-serif;
    text-decoration: none;

    &:hover {
    text-decoration: underline;
    }
`;

export class SearchResults extends React.Component {
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
        this.props.dispatch(searchSuccess(results))
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
        
        const restaurants = this.props.findings.map((restaurant, index) =>
            <li className="search-results" key={index}>
                <div className="img"><img src={restaurant.icon} alt="icon" /></div>
                <div className="info">
                    <div className="info-title">
                        <span className="index">{index + 1}. </span>
                        <h4>
                            <StyledLink to={`place/${restaurant.place_id}`}>
                                {restaurant.name}
                            </StyledLink>
                        </h4>
                    </div>
                    <h5>Rating:{restaurant.rating}</h5>
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
        if (!this.props.findings)  {
            return false
        }
        return(
            <ul className="search-results-list">
                {this.renderResults()}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    keyword: state.search.keyword,
    location: state.search.location,
    findings: state.search.findings
});
export default withRouter(connect(mapStateToProps)(SearchResults));