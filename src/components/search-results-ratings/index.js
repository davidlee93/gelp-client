import React from "react";

export default function SearchResultsRatings(props) {
  const { info } = props;
  return (
    <div className="place-ratings">
      <h5>Rating:{info.rating}</h5>
      <ul className="place-ratings-list">
        <li>Quantity: 4</li>
        <li>Quality: 3</li>
        <li>Pricing: 4.5</li>
      </ul>
    </div>
  );
}
