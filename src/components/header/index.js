import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div> 
                    <a href="/search" className="header-title-link"><h1 className="header-title">Gelp</h1></a>
                </div>
            </header>
        );
    }
}