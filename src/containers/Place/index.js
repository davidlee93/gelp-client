import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../../components/requires-login';
import SearchBar from '../../components/search-bar';
import LogOutBar from '../../components/logout-bar';
import PlaceHeader from '../../components/place-header';
import PlaceReviews from '../../components/place-reviews';
import './place.css';

export class Place extends React.Component{
    render() {
        return (
            <div className="PlacePage">
                <div className="nav-search-box">
                    <SearchBar />
                </div>
                <div className="header-logout-box">
                    <LogOutBar />
                </div>
                <div className="place-result-box">
                    <PlaceHeader />
                    <PlaceReviews />
                </div>
            </div>
        );
    }
}
export default connect()(Place);
// export default requiresLogin()(connect(Place));