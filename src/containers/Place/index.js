import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import requiresLogin from "../../components/requires-login";
import SearchBar from "../../components/search-bar";
import Logo from "../../components/logo";
import LogOutBar from "../../components/logout-bar";
import PlaceDetail from "../../components/place-detail";

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

export default withRouter(requiresLogin()(connect()(Place)));
