import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import Landing from '../Landing';
import Signup from '../Signup';
import Login from '../Login';
import Search from '../Search';
import Findings from '../Findings';
import Place from '../Place';
import Footer from '../../components/footer';
import Rate from '../WriteAReview';
import {refreshAuthToken} from '../../actions/auth';

import './app.css';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <main>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/findings" component={Findings} />
                        <Route exact path="/place" component={Place} />
                        <Route exact path="/rate" component={Rate} />
                    </main>
                    <Footer />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !==null
});

export default withRouter(connect(mapStateToProps)(App));
