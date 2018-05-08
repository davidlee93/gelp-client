import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/users';
import {login} from '../../actions/auth';
import Input from '../input';
import './signup-form.css';
import {required, nonEmpty, matches, length, isTrimmed, email} from '../../validators';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');

export class SignupForm extends React.Component {
    onSubmit(values) {
        const {firstname, lastname, email, password, zipcode} = values;
        const user= {firstname, lastname, email, password, zipcode};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(email, password)));
    }
    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Signed up successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }
        return(
            <section className="signup-section">
                <h3>Sign Up for Gelp</h3>
                <form
                    className="signup-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {successMessage}
                    {errorMessage}
                    <Field 
                        component={Input}
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        validate={[required, nonEmpty]} 
                    />
                    <Field
                        component={Input}
                        type="text"
                        placeholder="Last Name"
                        name="lastname" 
                        validate={[required, nonEmpty]} 
                        />
                    <Field
                        component={Input}
                        type="email"
                        placeholder="Email"
                        name="email"
                        validate={[required, nonEmpty, email, isTrimmed]}
                    />
                    <Field
                        component={Input}
                        type="password"
                        placeholder="Password"
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    <Field
                        component={Input}
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    <Field
                        component={Input}
                        type="numbers"
                        placeholder="ZIP Code"
                        name="zipcode"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <button
                        type="submit"
                        className="signup-button"
                        disabled={this.props.pristine || this.props.submitting}>
                        Sign Up
                    </button>
                </form>
            </section>
        )
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(SignupForm);

