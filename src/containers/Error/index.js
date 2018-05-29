import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import requiresLogin from "../../components/requires-login";
import Logo from "../../components/logo";
import SearchBar from "../../components/search-bar";
import LogOutBar from "../../components/logout-bar";
import "./error.css";

export class Error extends React.Component {
  render() {
    return (
      <div className="ErrorsPage">
        <div className="nav-search-box">
          <Logo />
          <SearchBar />
          <div>
            <LogOutBar />
          </div>
        </div>
        <div className="error-message"> Search Error, Please Try Again </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser,
  search: state.search
});
export default withRouter(requiresLogin()(connect(mapStateToProps)(Error)));
