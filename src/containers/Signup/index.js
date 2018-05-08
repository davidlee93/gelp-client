import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Header from '../../components/header';
import SignupForm from '../../components/signup-form';
import './signup.css';

export function Signup (props) {
    if(props.loggedIn) {
        return <Redirect to="/search" />;
    }
    return (
        <div className="signUpPage">
            <Header />
            <SignupForm />
            Already on Gelp?<Link to="/login">Log In</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Signup);
