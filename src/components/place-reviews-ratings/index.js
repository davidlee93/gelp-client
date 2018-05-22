import React from "react";
import "./place-reviews-ratings.css";

const PlaceReviewsRatings = ({ placeInfo, ratings }) => {
  if (!ratings && !placeInfo) {
    return false;
  }
  if (ratings && placeInfo) {
    const avgRating = ratings.map((rating, index) => {
      return ((rating.quantity + rating.quality + rating.pricing) / 3).toFixed(
        1
      );
    });
    //   const lastInitial = rating.userLastName.substring(0, 1);
    const placeRatings =
      ratings.map((rating, index) => (
        <li className="place-result-review-list" key={index}>
          <div className="place-result-review">
            <div className="user-info">
              <div className="user-name">
                <h5>
                  {rating.userFirstName} {rating.userLastName}
                </h5>
              </div>
              <div className="user-zip-member">
                <p>Zipcode: {rating.userZipcode}</p>
                <p style={{ color: "#ff0000" }}>
                  Member since `{rating.userCreated.slice(2, 4)}
                </p>
              </div>
            </div>
            <div className="place-review-ratings-box">
              <ul className="place-review-ratings-list">
                <li>Rating: {avgRating[index]}</li>
                <li>Quantity: {rating.quantity}</li>
                <li>Quality: {rating.quality}</li>
                <li>Pricing: {rating.pricing}</li>
              </ul>
              <p className="review-text">{rating.textarea}</p>
            </div>
          </div>
          <div className="place-result-review-divider">
            <hr />
          </div>
        </li>
      )) || {};
    return <ul className="place-result-reviews">{placeRatings}</ul>;
  }
};
export default PlaceReviewsRatings;
