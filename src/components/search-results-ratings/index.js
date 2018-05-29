import React from "react";

export class SearchResultsRatings extends React.Component {
  state = {
    ratings: this.props,
    avgRating: null
  };

  // componentDidMount() {
  //   const { info } = this.props;
  // }
  componentWillReceiveProps(nextProps) {
    if (this.props.info !== nextProps.info) {
      this.setState({
        info: nextProps.info
      });
      if (this.state.info) {
        const avgRating = (
          (this.state.info.avgQuantity +
            this.state.info.avgQuality +
            this.state.info.avgPricing) /
          3
        ).toFixed(1);
        this.setState({ avgRating });
      }
    }
  }
  render() {
    return (
      <div className="info-place-ratings">
        <h5>Rating: {this.props.info.avgRating || this.props.info.rating}</h5>
        <ul className="info-place-ratings-list">
          <li>
            Quantity:{" "}
            {(this.state.info && this.state.info.avgQuantity) ||
              Math.floor(Math.random() * 5) + 1}
          </li>
          <li>
            Quality:{" "}
            {(this.state.info && this.state.info.avgQuality) ||
              Math.floor(Math.random() * 5) + 1}
          </li>
          <li>
            Pricing:{" "}
            {(this.state.info && this.state.info.avgPricing) ||
              Math.floor(Math.random() * 5) + 1}
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchResultsRatings;
