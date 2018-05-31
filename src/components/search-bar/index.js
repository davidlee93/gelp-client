import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//import Spinner from 'react-spinkit';
import { setKeyword, setNear, setLocation } from "../../actions/search";

import "./search-bar.css";
const { GOOGLE_API_KEY } = require("../../config");
require("dotenv").config();

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: this.props.search.keyword,
      near: this.props.search.near
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(setKeyword(this.state.keyword));
    this.props.dispatch(setNear(this.state.near));
    const geocode = this.state.near;
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?&address=${geocode}&key=${GOOGLE_API_KEY}`
    )
      .then(res => res.json())
      .then(response => {
        if (response.results && response.results[0].geometry.location) {
          this.props.dispatch(
            setLocation(response.results[0].geometry.location)
          );
          // this.props.dispatch(setLocality(response.results[0].address_components[0]))
          this.props.history.push("/findings");
        } else {
          this.props.history.push("/error");
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
        <div className="search-div">
          <div className="find-div">
            <label htmlFor="find">
              <strong>Find</strong>
            </label>
            <input
              type="text"
              name="find"
              id="keyword"
              className="search keyword border-right"
              placeholder="sushi, burritos, ayce kbbq..."
              value={this.state.keyword}
              onChange={e => this.setState({ keyword: e.target.value })}
            />
          </div>
          <div className="near-div">
            <label htmlFor="near">
              <strong>Near</strong>
            </label>
            <input
              type="text"
              name="near"
              id="near"
              className="search near"
              placeholder="address, city, state or zip"
              value={this.state.near}
              onChange={e => this.setState({ near: e.target.value })}
            />
          </div>
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  loading: state.loading,
  error: state.error
});

export default withRouter(connect(mapStateToProps)(SearchBar));
