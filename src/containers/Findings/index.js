import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//import requiresLogin from '../../components/requires-login';
import Logo from "../../components/logo";
import SearchBar from "../../components/search-bar";
import LogOutBar from "../../components/logout-bar";
import Filter from "../../components/filter";
import SearchResults from "../../components/search-results";
import Pagination from "../../components/pagination";

import "./findings.css";

export class Findings extends React.Component {
  searchWait() {
    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

    return;
  }

  render() {
    return (
      <div className="findingsPage">
        <div className="nav-search-box">
          <Logo />
          <SearchBar />
          <div>
            <LogOutBar />
          </div>
        </div>
        <div className="header-filter-box">
          <Filter />
        </div>
        <div className="search-results-container">
          <div className="search-results-column">
            <div className="search-results-box">
              {this.props.search.findings && <SearchResults />}
            </div>
            <div className="search-results-pagination">
              <Pagination />
            </div>
          </div>
          <div className="search-results-map-container">
            <div className="search-results-map" id="map" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser,
  search: state.search
});
export default withRouter(connect(mapStateToProps)(Findings));
// export default requiresLogin()(connect(mapStateToProps)(Findings));

// rating = {service: 5, clean: 5, userId: currentUser, restId: 'someId'}
// fetch(/api/ratings/)
// fetch(/api/ratings/:userID)
// fetch(/api/restraunts)
// fetch(/api/ratings/:restId)