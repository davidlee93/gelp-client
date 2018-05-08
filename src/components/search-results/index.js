import React from 'react';
import './search-results.css';

export default class SearchResults extends React.Component {
    render() {
        return(
            <ul className="search-results-list">
                <li className="search-results">
                    <div className="img">img</div>
                    <div className="info">
                        <h3><a href="#">Place 1</a></h3>
                        <h4>Ratings</h4>
                        <p>stars</p>
                    </div>
                    <div className="address">
                        <p>address</p>
                    </div>
                </li>
                <li className="search-results">
                    <div className="img">img</div>
                    <div className="info">
                        <h3><a href="#">Place 2</a></h3>
                        <h4>Ratings</h4>
                        <p>stars</p>
                    </div>
                    <div className="address">
                        <p>address</p>
                    </div>
                </li>
                <li className="search-results">
                    <div className="img">img</div>
                    <div className="info">
                        <h3><a href="#">Place 3</a></h3>
                        <h4>Ratings</h4>
                        <p>stars</p>
                    </div>
                    <div className="address">
                        <p>address</p>
                    </div>
                </li>
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
