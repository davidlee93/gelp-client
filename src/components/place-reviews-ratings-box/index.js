import React from "react";
import "./place-reviews-ratings-box.css";

const PlaceReviewsRatingsList = ({ placeInfo, ratings }) => {
  if (!ratings && !placeInfo) {
    return false;
  }
  if (ratings && placeInfo) {
    const avgRating = ratings.map((rating, index) => {
      return (rating.quantity + rating.quality + rating.pricing) / 3;
    });

    const placeRatingsList =
      ratings.map((rating, index) => (
        <div className="place-review-ratings-box">
          <ul className="place-review-ratings-list">
            <li>Rating: {avgRating[index] || 4.4}</li>
            <li>Quantity: {rating.quantity}</li>
            <li>Quality: {rating.quality}</li>
            <li>Pricing: {rating.pricing}</li>
          </ul>
          <p className="review-text">{rating.textarea}</p>
        </div>
      )) || {};
    return placeRatingsList;
  }
};
export default PlaceReviewsRatingsList;
