import React from 'react';
import {connect} from 'react-redux';
// import requiresLogin from '../../components/requires-login';
import Logo from '../../components/logo';
import LogOutBar from '../../components/logout-bar';
import RatingForm from '../../components/rating-form';
import './rate.css';

export class Rate extends React.Component {
    render() {
        return (
            <div className="ratePage">
                <header className="rate-header-box">
                    <div className="rate-header">
                        <Logo />
                        <h3>Write a Review</h3>
                        <LogOutBar />
                    </div>
                </header>
                <section className="rate-section">
                    <div className="rate-title">
                        <h2>Place to rate</h2>
                    </div>
                    <RatingForm />
                </section>
            </div>
        );
    }
}
export default connect()(Rate);
// export default requiresLogin()(connect(Rate));