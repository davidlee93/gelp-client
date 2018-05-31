import React from "react";
import "./place-reviews-rating-filler.css";

const RatingFiller = () => {
  return (
    <ul className="place-result-reviews-filler">
      <li className="place-result-review-list-filler">
        <div className="place-result-review-filler">
          <div className="user-info-filler">
            <div className="user-name-filler">
              <h5>Lorem I.</h5>
            </div>
            <div className="user-zip-member-filler">
              <p>Zipcode: 90210</p>
              <p style={{ color: "#ff0000" }}>Member since `18</p>
            </div>
          </div>
          <div className="place-review-ratings-box-filler">
            <ul className="place-review-ratings-list-filler">
              <li className="place-aggregate-rating-filler">Rating: 5</li>
              <li>Quantity: 5</li>
              <li>Quality: 5</li>
              <li>Pricing: 5</li>
            </ul>
            <p className="review-text-filler">
              There seems to be no reviews for this location. Be the first to
              write a review on this place! Your review will replace this one :)
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default RatingFiller;
