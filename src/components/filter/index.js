import React from 'react';
import {connect} from 'react-redux';
import './filter.css';

export class Filter extends React.Component {
    render() {
        return (
            <header role="banner" className="header-filter">
                <div>
                    <h2>Best ____ in ____</h2>
                </div>
                <div id="myBtnContainer">
                    <button className="btn active" onclick="filterSelection('all')"> $</button>
                    <button className="btn" onclick="filterSelection('')"> $$</button>
                    <button className="btn" onclick="filterSelection('')"> $$$ </button>
                    <button className="btn" onclick="filterSelection('')"> $$$$</button>
                    <button className="btn" onclick="filterSelection('')"> Open Now</button>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    keyword: state.search.keyword,
    location: state.search.location
});

export default connect(mapStateToProps)(Filter);