import React from "react";
import Spinner from "react-spinkit";

export default function SearchResultsInfo(props) {
  const { info } = props;
  return (
    <div className="address-open-review">
      <p>{info.vicinity}</p>
      <div className="open-closed">
        {info.opening_hours && info.opening_hours.open_now ? (
          <p style={{ color: "#00ff00" }}>Open now</p>
        ) : (
          <p style={{ color: "#ff0000" }}>Closed now</p>
        )}
      </div>
      <p className="reviews-number">{info.count || 0} Reviews</p>
    </div>
  );
}
