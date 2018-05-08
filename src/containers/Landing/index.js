import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LandingBoxWhat from '../../components/landingbox/landingboxwhat';
import LandingBoxHow from '../../components/landingbox/landingboxhow';
import LandingBoxStart from '../../components/landingbox/landingboxstart';
import './landing.css';


export function Landing(props) {
    if (props.loggedIn) {
        return <Redirect to="/search" />;
    }
    return (
        <div className="landingPage">
            <h1 className="title">Gelp</h1>
            <div className="landing-boxes">
                <ul className="landing-box-list">
                    <li><LandingBoxWhat /></li>
                    <li><LandingBoxHow /></li>
                    <li><LandingBoxStart /></li>
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);