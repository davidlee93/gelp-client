import React from "react";
import "./place-reviews-ratings.css";

const PlaceReviewsRatings = ({ ratings }) => {
  const avgRating = ratings.map(rating => {
    return ((rating.quantity + rating.quality + rating.pricing) / 3).toFixed(1);
  });
  const placeRatings = ratings.map((rating, index) => (
    <Rating rating={rating} key={index} avgRating={avgRating[index]} />
  ));
  return <ul className="place-result-reviews">{placeRatings}</ul>;
};

const Rating = ({ rating, avgRating }) => {
  return (
    <li className="place-result-review-list">
      <div className="place-result-review">
        <div className="user-info">
          <div className="user-name">
            <h5>
              {rating.userFirstName} {rating.userLastName.slice(0, 1)}.
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
            <li className="aggregate-rating">Rating: {avgRating}</li>
            <li>Quantity: {rating.quantity}</li>
            <li>Quality: {rating.quality}</li>
            <li>Pricing: {rating.pricing}</li>
          </ul>
          <p className="review-text">{rating.textarea}</p>
        </div>
      </div>
    </li>
  );
};
export default PlaceReviewsRatings;
