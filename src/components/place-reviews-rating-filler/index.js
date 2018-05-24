import React from "react";

const RatingFiller = () => {
  return (
    <li className="place-result-review-list">
      <div className="place-result-review">
        <div className="user-info">
          <div className="user-name">
            <h5>Joe S.</h5>
          </div>
          <div className="user-zip-member">
            <p>Zipcode: 94704</p>
            <p style={{ color: "#ff0000" }}>Member since `18</p>
          </div>
        </div>
        <div className="place-review-ratings-box">
          <ul className="place-review-ratings-list">
            <li className="place-aggregate-rating">Rating: 4</li>
            <li>Quantity: 4</li>
            <li>Quality: 3</li>
            <li>Pricing: 5</li>
          </ul>
          <p className="review-text">
            There seems to be no reviews. Be the first to write a review on this
            place!
          </p>
        </div>
      </div>
    </li>
  );
};
export default RatingFiller;
