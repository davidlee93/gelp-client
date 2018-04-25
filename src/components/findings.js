import React from 'react';
import SearchBar from './search-bar';
import Filter from './filter';
import SearchResults from './search-results';
import Pagination from './pagination';
import './findings.css';

export default class Findings extends React.Component {
    render() {
        return (
            <div className="findingsPage">
                <div className="nav-search-box">
                    <SearchBar />
                </div>
                <div className="header-filter-box">
                    <Filter />
                </div>
                <div className="search-results-container">
                    <div className="search-results-column">
                        <div className="search-results-box">
                            <SearchResults />
                        </div>
                        <div className="search-results-pagination">
                            <Pagination />
                        </div>
                    </div>
                    <div className="search-results-map-container">
                        <div className="search-results-map">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}