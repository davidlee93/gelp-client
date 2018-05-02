import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import Landing from './landing';
import Signup from './signup';
import Search from './search';
import Findings from './findings';
import Place from './place';
import Footer from './footer';
import Rate from './rate';
import {refreshAuthToken} from '../actions/auth';

import './app.css';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <main>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/signup" component={Signup} />
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
