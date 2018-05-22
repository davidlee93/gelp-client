import React from "react";
import { connect } from "react-redux";
import "./filter.css";

export class Filter extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <header role="banner" className="header-filter">
        <div>
          <h3>
            Best {this.props.keyword}{" "}
            <span className="query-location">in {this.props.near}</span>
          </h3>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  keyword: state.search.keyword,
  near: state.search.near,
  location: state.search.location,
  locality: state.search.locality
});

export default connect(mapStateToProps)(Filter);
