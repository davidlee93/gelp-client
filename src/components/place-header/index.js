import React from 'react';
import {connect} from 'react-redux';
import './place-header.css';

export class PlaceHeader extends React.Component {
    componentDidMount(){
        console.log(this.props.findings);
    }
    render() {
        return(
            <div className="place-result-header">
                <div className="place-result-left">
                    <div className="place-result-title">
                        <h2> Place </h2>
                    </div>
                    <div className="place-result-left-box">
                        <div className="place-result-left-ratings">
                            <h4>Ratings</h4>
                            <div className="place-result-review-button">
                                <button type="button" className="write-a-review-button">
                                    <a href="/review"> Write a Review </a>
                                </button>
                            </div>
                        </div>
                        <div className="place-result-left-info">
                            <h4>Hours</h4>
                            <div className="hours">
                                <ul className="hours-list">
                                    <li>Mon</li>
                                    <li>Tues</li>
                                    <li>Wed</li>
                                    <li>Thurs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="place-result-right">
                    <div className="place-result-map" id="map">MAP</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    keyword: state.search.keyword,
    location: state.search.location,
    findings: state.search.findings
});
export default connect(mapStateToProps)(PlaceHeader);
