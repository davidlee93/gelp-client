import React from "react";

export default function SearchResultsRatings(props) {
  const { info } = props;
  return (
    <div className="info-place-ratings">
      <h5>Rating:{info.rating}</h5>
      <ul className="info-place-ratings-list">
        <li>Quantity: 4</li>
        <li>Quality: 3</li>
        <li>Pricing: 4.5</li>
      </ul>
    </div>
  );
}
