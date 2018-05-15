import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div> 
                    <h1 className="header-title">Gelp</h1>
                </div>
            </header>
        );
    }
}