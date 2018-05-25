import React from "react";
import Rating from "../place-reviews-rating";
import RatingFiller from "../place-reviews-rating-filler";
import "./place-reviews.css";

const PlaceReviews = ({ ratings }) => {
  if (!ratings) {
    return false;
  } else {
    const avgRating = ratings.map(rating => {
      return ((rating.quantity + rating.quality + rating.pricing) / 3).toFixed(
        1
      );
    });
    const placeRatings = ratings.map((rating, index) => (
      <Rating rating={rating} key={index} avgRating={avgRating[index]} />
    ));

    return <ul className="place-result-reviews">{placeRatings}</ul>;
  }
};

export default PlaceReviews;

//TODOs get ratingfiller working
