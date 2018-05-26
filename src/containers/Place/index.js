import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import requiresLogin from "../../components/requires-login";
import SearchBar from "../../components/search-bar";
import Logo from "../../components/logo";
import LogOutBar from "../../components/logout-bar";
import PlaceDetail from "../../components/place-detail";
import PlaceReviews from "../../components/place-reviews";
import "./place.css";

export class Place extends React.Component {
  render() {
    return (
      <div className="PlacePage">
        <div className="nav-search-box">
          <Logo />
          <SearchBar />
        </div>
        <div className="header-logout-box">
          <LogOutBar />
        </div>
        <div className="place-result-box">
          <PlaceDetail place_id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});
export default withRouter(connect(mapStateToProps)(Place));
// export default requiresLogin()(connect(mapStateToProps)(Search));
