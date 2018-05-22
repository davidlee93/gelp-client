import React from "react";
import { connect } from "react-redux";
import { setPlaceId } from "../../actions/search";
import { API_BASE_URL } from "../../config";
import PlaceReviewsRatings from "../place-reviews-ratings";
import "./place-reviews.css";

export class PlaceReviews extends React.Component {
  state = {
    ratings: []
  };
  componentDidMount() {
    this.props.dispatch(setPlaceId(this.props.place_id));
    if (this.props.placeInfo.place_id) {
      fetch(`${API_BASE_URL}/ratings/place/${this.props.placeInfo.place_id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(ratings => this.setState({ ratings }))
        .catch(error => console.log(error));
    }
  }
  renderReviews() {
    const { placeInfo } = this.props;
    const { ratings } = this.state;
    return <PlaceReviewsRatings placeInfo={placeInfo} ratings={ratings} />;
  }

  render() {
    return (
      <div className="place-result-reviews-box">{this.renderReviews()}</div>
    );
  }
}

const mapStateToProps = state => ({
  placeInfo: state.search.placeInfo
});

export default connect(mapStateToProps)(PlaceReviews);
