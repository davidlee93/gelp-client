import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../../components/requires-login';
import SearchBar from '../../components/search-bar';
import LogOutBar from '../../components/logout-bar';
import Filter from '../../components/filter';
import SearchResults from '../../components/search-results';
import Pagination from '../../components/pagination';
import Spinner from 'react-spinkit';

import './findings.css';

export class Findings extends React.Component {
    render() {
        return (
            <div className="findingsPage">
                <div className="nav-search-box">
                    <SearchBar />
                </div>
                <div className="header-logout-box">
                    <LogOutBar />
                </div>
                <div className="header-filter-box">
                    <Filter />
                </div>
      
                <div className="search-results-container">
                    <div className="search-results-column">
                        <div className="search-results-box">
                            {this.props.search.keyword && this.props.search.location && <SearchResults />}
                        </div>
                        <div className="search-results-pagination">
                            <Pagination />
                        </div>
                    </div>
                    <div className="search-results-map-container">
                        <div className="search-results-map" id="map">
                        </div>
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
export default connect(mapStateToProps)(Findings);
// export default requiresLogin()(connect(mapStateToProps)(Findings));

// rating = {service: 5, clean: 5, userId: currentUser, restId: 'someId'}
// fetch(/api/ratings/)
// fetch(/api/ratings/:userID)
// fetch(/api/restraunts)
// fetch(/api/ratings/:restId)