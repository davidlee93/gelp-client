import React from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header';
import LogOutBar from '../../components/logout-bar';
import SearchBar from '../../components/search-bar';
import requiresLogin from '../../components/requires-login';
import './search.css';
import { fetchProtectedData } from '../../actions/protected-data';

export class Search extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="searchPage">
                <Header />
                <div className="header-logout-box">
                    <LogOutBar />
                </div>
                <div className="search-box">
                    <SearchBar />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
// email: state.auth.currentUser.email,
// name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};
export default connect(mapStateToProps)(Search);
// export default requiresLogin()(connect(mapStateToProps)(Search));