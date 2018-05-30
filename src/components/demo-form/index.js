import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../input";
import { demoLogin } from "../../actions/auth";
import { required, nonEmpty, email } from "../../validators";
import "./demo-form.css";

export class DemoForm extends React.Component {
  demoUserLogin() {
    const demoEmail = "demo@user.com";
    const demoPass = "123123";
    const email = demoEmail;
    const password = demoPass;
    return this.props.dispatch(demoLogin(email, password));
  }
  handleClick(e) {
    e.preventDefault();
    this.demoUserLogin();
  }

  render() {
    return (
      <button className="demo-submit-button" onClick={e => this.handleClick(e)}>
        Demo User
      </button>
    );
  }
}

export default connect()(DemoForm);
