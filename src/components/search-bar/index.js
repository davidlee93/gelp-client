import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Spinner from 'react-spinkit';
import {setKeyword, setLocation, searchInputs} from '../../actions/search';

import './search-bar.css';

export class SearchBar extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const geocode = this.props.search.location;
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?&address=${geocode}&key=AIzaSyDqCUlkl2tTiCdR4VesmoMW47j7mLRTbhM`)
        .then(res => res.json())
        .then(response => {
            this.props.dispatch(setLocation(response.results[0].geometry.location))
            this.props.history.push('/findings');
        })
    }

    render() {

        return (
            <form 
                className='search-form'
                onSubmit={(e) => this.handleSubmit(e)}
            >
                <div className="search-div">
                    <div className="find-div">
                        <label htmlFor="find"><strong>Find</strong></label>
                        <input 
                            type="text"
                            name='find'
                            id='keyword'
                            className="search keyword border-right"
                            placeholder="sushi, burritos, ayce kbbq..."
                            onChange={e => this.props.dispatch(setKeyword(e.target.value))}
                        />
                    </div>
                    <div className="near-div">
                        <label htmlFor="location"><strong>Near</strong></label>
                        <input 
                            type="text"
                            name='location' 
                            id='location'
                            className="search location"
                            placeholder="address, city, state or zip"
                            onChange={e => this.props.dispatch(setLocation(e.target.value))}
                        />
                    </div>
                </div>
                <button type='submit' className="search-button">Search</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    keyword: state.keyword,
    location: state.location,
    search: state.search,
    loading: state.loading,
    error: state.error
});

export default withRouter(connect(mapStateToProps)(SearchBar));