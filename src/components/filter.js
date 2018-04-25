import React from 'react';
import './filter.css';

export default class Filter extends React.Component {
    render() {
        return (
            <header role="banner" className="header-filter">
                <h1>Best ____ in _____</h1>
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