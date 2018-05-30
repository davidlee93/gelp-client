import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../input";
import { login } from "../../actions/auth";
import { required, nonEmpty, email } from "../../validators";
import "./login-form.css";

export class LoginForm extends React.Component {
  onSubmit(values) {
    console.log(values);
    console.log(values.email);
    console.log(values.password);
    return this.props.dispatch(login(values.email, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <Field
          component={Input}
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          validate={[required, email, nonEmpty]}
        />
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          validate={[required, nonEmpty]}
        />
        <button
          className="submit-button"
          disabled={this.props.pristine || this.props.submitting}
        >
          Log In
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "email"))
})(LoginForm);
