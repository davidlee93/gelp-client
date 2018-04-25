import React from 'react';
import SearchBar from './search-bar';
import PlaceHeader from './place-header';
import PlaceReviews from './place-reviews';
import './place.css';

export default class Place extends React.Component{
    render() {
        return (
            <div className="PlacePage">
                <div className="nav-search-box">
                    <SearchBar />
                </div>
                <div className="place-result-box">
                    <PlaceHeader />
                    <PlaceReviews />
                </div>
            </div>
        );
    }
}
