import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Header from "../../components/header";
import SignupForm from "../../components/signup-form";
import styled from "styled-components";
import "./signup.css";

const StyledLink = styled(Link)`
  color: #0073bb;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export function Signup(props) {
  if (props.loggedIn) {
    return <Redirect to="/search" />;
  }
  return (
    <div className="signUpPage">
      <Header />
      <div className="signup-title">
        <h2>Sign Up for Gelp</h2>
        <h5> Connect with local businesses </h5>
      </div>
      <SignupForm />
      <div className="already-login">
        <div>
          Already on Gelp?
          <StyledLink to="/login"> Log In</StyledLink>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Signup);
