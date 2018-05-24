import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Header from "../../components/header";
import LoginForm from "../../components/login-form";
import styled from "styled-components";
import "./login.css";

const StyledLink = styled(Link)`
  color: #0073bb;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export function Login(props) {
  // If we are logged in, redirect straight to the search page
  if (props.loggedIn) {
    return <Redirect to="/search" />;
  }
  return (
    <div className="login">
      <Header />
      <h2 className="login-title">Log In to Gelp</h2>
      <div className="new-to-gelp">
        <h5> New to Gelp? Sign up below </h5>
      </div>
      <LoginForm />
      <div className="new-signup">
        <div>
          New to Gelp?<StyledLink to="/signup"> Sign up</StyledLink>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);
