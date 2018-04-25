import React from 'react';
import Header from './header';
import SearchBar from './search-bar';
import './search.css';

export default class Search extends React.Component {
    render() {
        return (
            <div className="searchPage">
                <Header />
                <div className="search-box">
                    <SearchBar />
                </div>
            </div>
        );
    }
}