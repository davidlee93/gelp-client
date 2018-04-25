import React from 'react';
import LandingBoxWhat from './landingboxwhat';
import LandingBoxHow from './landingboxhow';
import LandingBoxStart from './landingboxstart';
import './landing.css';


export default class Landing extends React.Component {
    render() {
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
}
