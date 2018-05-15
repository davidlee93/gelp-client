import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//import Spinner from 'react-spinkit';
import {setKeyword, setNear, setLocation} from '../../actions/search';

import './search-bar.css';

export class SearchBar extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const geocode = this.props.search.near;
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?&address=${geocode}&key=AIzaSyDqCUlkl2tTiCdR4VesmoMW47j7mLRTbhM`)
        .then(res => res.json())
        .then(response => {
            this.props.dispatch(setLocation(response.results[0].geometry.location))
            // this.props.dispatch(setLocality(response.results[0].address_components[0]))
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
                            value={this.props.search.keyword}
                            onChange={e => this.props.dispatch(setKeyword(e.target.value))}
                        />
                    </div>
                    <div className="near-div">
                        <label htmlFor="near"><strong>Near</strong></label>
                        <input 
                            type="text"
                            name='near' 
                            id='near'
                            className="search near"
                            placeholder="address, city, state or zip"
                            value={this.props.search.near}
                            onChange={e => this.props.dispatch(setNear(e.target.value))}
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
    near: state.near,
    location: state.location,
    search: state.search,
    loading: state.loading,
    error: state.error
});

export default withRouter(connect(mapStateToProps)(SearchBar));