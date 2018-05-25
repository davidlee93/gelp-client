import React from "react";

export default function SearchResultsRatings(props) {
  const { info } = props;
  return (
    <div className="info-place-ratings">
      <h5>Rating: {info.rating}</h5>
      <ul className="info-place-ratings-list">
        <li>Quantity: {Math.floor(Math.random() * 5) + 1}</li>
        <li>Quality: {Math.floor(Math.random() * 5) + 1}</li>
        <li>Pricing: {Math.floor(Math.random() * 5) + 1}</li>
      </ul>
    </div>
  );
}
