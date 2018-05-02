import React from 'react';
import Header from './header';
import SearchBar from './search-bar';
import './search.css';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            location: ''
        }
    }

    render() {
        const loc = this.state.location;
        return (
            <div className="searchPage">
                <Header />
                <div className="search-box">
                    <SearchBar onChange={location => this.setState({location})} spot={loc} />
                </div>
            </div>
        );
    }
}