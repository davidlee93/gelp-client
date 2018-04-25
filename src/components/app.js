import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './landing';
import Signup from './signup';
import Search from './search';
import Findings from './findings';
import Place from './place';
import Footer from './footer';
import Rate from './rate';

import './app.css';

export default function App(props) {
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
