import React from "react";
import { connect } from "react-redux";
import LogOutBar from "../../components/logout-bar";
import SearchLogo from "../../components/search-logo";
import SearchBar from "../../components/search-bar";
import SearchFiller from "../../components/search-filler";
import requiresLogin from "../../components/requires-login";
import "./search.css";

export class Search extends React.Component {
  render() {
    return (
      <div className="searchPage">
        <div className="header-logout-box">
          <LogOutBar />
        </div>
        <div className="search-box">
          <SearchLogo />
          <div className="search-form-box">
            <SearchBar />
          </div>
        </div>
        <div className="search-filler-box">
          <SearchFiller />
        </div>
      </div>
    );
  }
}

export default requiresLogin()(connect()(Search));
