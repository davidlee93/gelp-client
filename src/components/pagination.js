import React from 'react';
import './pagination.css';

export default class Pagination extends React.Component {
    render() {
        return (
            <div className="pagination">
                <div className="page-of-pages">
                    <a>Page 1 of 5</a>
                </div>
                <div className="page-links">
                    <a href="#"> &lt; </a>
                    <a href="#">Previous</a>
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">Next</a>
                    <a href="#"> &gt; </a>
                </div>
            </div>
        );
    }
}