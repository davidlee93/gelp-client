import React from 'react';
import './place-reviews.css';

export default class PlaceReviews extends React.Component {
    render() {
        return (
            <div className="place-result-reviews-box">
                <ul className="place-result-reviews">
                    <li className="place-result-review">
                        username1: review/comments
                    </li>
                    <li className="place-result-review">
                        username2: review/comments
                    </li>
                    <li className="place-result-review">
                        username3: review/comments
                    </li>
                </ul>
            </div>
        )
    }
}