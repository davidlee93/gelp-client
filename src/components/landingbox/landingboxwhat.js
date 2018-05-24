import React from "react";
import "./landingbox.css";

export default class LandingBoxWhat extends React.Component {
  render() {
    return (
      <div className="landingBox">
        <h2>What Is Gelp?</h2>
        <p>
          It's a take on Yelp using Google Places API. Much like it's
          predecessor, Gelp provides users the ability to search local
          businesses and leave reviews.
        </p>
      </div>
    );
  }
}
