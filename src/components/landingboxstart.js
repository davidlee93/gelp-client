import React from 'react';
import './landingbox.css';

export default class LandingBoxStart extends React.Component {
    render() {
        return (
            <div className="landingBox">
                <h2>
                    Getting Started
                </h2>
                <p>
                    <a href="/signup" >Sign up</a> and start searching!
                </p>
            </div>
        );
    }
}