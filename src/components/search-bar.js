import React from 'react';
import './search-bar.css';

export default class SearchBar extends React.Component {
    render() {
        return (
                <form className='search-form'>
                    <div className="search-div">
                        <div className="find-div">
                            <label for="find"><strong>Find</strong></label>
                            <input type="text" name='find' id='location' className="border-right" placeholder="sushi, burritos, ayce kbbq..."/>
                        </div>
                        <div className="near-div">
                            <label for="location"><strong>Near</strong></label>
                            <input type="text" name='location' id='location'  placeholder="address, city, state or zip"/>
                        </div>
                    </div>
                    <button type='submit' className="search-button">Search</button>
                </form>
        );
    }
}