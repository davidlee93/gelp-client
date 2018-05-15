import React from 'react';
import './logo.css';

export default class Logo extends React.Component {
    render() {
        return (
            <div className="logo"> 
                    <a href="/search" className="header-link"><h5 className="header-logo">Gelp</h5></a>
            </div>
        );
    }
}