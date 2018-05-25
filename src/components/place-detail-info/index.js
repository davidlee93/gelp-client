import React from "react";
import HoursList from "../hours";
import PlacePhotos from "../place-photos";

const PlaceDetailInfo = ({ placeInfo, ratings }) => {
  if (!ratings || !placeInfo) {
    return false;
  }
  const avgQuantity = ratings.reduce((quantity, rating, index, array) => {
    quantity += rating.quantity;
    if (index === array.length - 1) {
      return quantity / array.length;
    } else {
      return quantity;
    }
  }, 0);
  const avgQuality = ratings.reduce((quality, rating, index, array) => {
    quality += rating.quality;
    if (index === array.length - 1) {
      return quality / array.length;
    } else {
      return quality;
    }
  }, 0);
  const avgPricing = ratings.reduce((pricing, rating, index, array) => {
    pricing += rating.pricing;
    if (index === array.length - 1) {
      return pricing / array.length;
    } else {
      return pricing;
    }
  }, 0);
  const avgRating = ((avgQuantity + avgQuality + avgPricing) / 3).toFixed(1);

  return (
    <div className="place-result-detail-box">
      <div className="place-result-detail">
        <div className="place-result-left">
          <div className="place-result-title">
            <h2>{placeInfo.name}</h2>
          </div>
          <div className="place-result-left-box">
            <div className="place-result-left-ratings">
              <div className="place-ratings-box">
                <h4>Rating: {avgRating || placeInfo.rating}</h4>
                <div className="place-ratings">
                  <ul className="place-ratings-list">
                    <li>Quantity: {avgQuantity.toFixed(1) || "N/A"}</li>
                    <li>Quality: {avgQuality.toFixed(1) || "N/A"}</li>
                    <li>Pricing: {avgPricing.toFixed(1) || "N/A"}</li>
                  </ul>
                  <p className="reviews-number"> {ratings.length} Reviews </p>
                </div>
              </div>
              <div className="place-result-review-button">
                <a href={`/rate/${placeInfo.place_id}`}>
                  <button type="button" className="write-a-review-button">
                    Write a Review
                  </button>
                </a>
              </div>
            </div>
            <div className="place-result-left-info">
              <div className="open-closed">
                <h5>
                  Hours -
                  {placeInfo.opening_hours.open_now ? (
                    <span style={{ color: "#00ff00" }}> Open now</span>
                  ) : (
                    <span style={{ color: "#ff0000" }}> Closed now</span>
                  )}
                </h5>
              </div>
              <div className="hours">
                {placeInfo.opening_hours && (
                  <HoursList hours={placeInfo.opening_hours} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="place-result-right">
          <div className="place-result-map" id="map" />
          <div className="place-address">
            <p>
              {placeInfo.formatted_address &&
                placeInfo.formatted_address.replace(", USA", "")}
            </p>
          </div>
          <div className="place-number">
            <p>{placeInfo.formatted_phone_number}</p>
          </div>
          <div className="place-website">
            <a href={placeInfo.website}>
              {placeInfo.website && placeInfo.website.split("//")[1]}
            </a>
          </div>
        </div>
      </div>
      <div className="place-images-box">
        {placeInfo.urls && <PlacePhotos photos={placeInfo.urls} />}
      </div>
    </div>
  );
};
export default PlaceDetailInfo;
