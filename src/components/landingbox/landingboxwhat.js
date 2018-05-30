import React from "react";
import "./landingbox.css";

export default class LandingBoxWhat extends React.Component {
  render() {
    return (
      <div className="landingBox">
        <h2>What Is Gelp?</h2>
        <p>
          It's a take on Yelp using Google Places Library and Google Maps
          Javascript API v3. Much like it's predecessor, Gelp provides users the
          ability to explore local businesses and leave reviews.
        </p>
      </div>
    );
  }
}
