import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from '../../components/login-form';
import './login.css';

export function Login(props) {
    // If we are logged in, redirect straight to the search page
    if (props.loggedIn) {
        return <Redirect to="/search" />;
    }
    return (
        <div className="login">
            <h2>Welcome to Gelp</h2>
            <LoginForm />
            New to Gelp? <Link to="/signup">Sign Up</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);