import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
// import {registerUser} from '../../actions/users';
// import {login} from '../../actions/auth';
import Input from '../input';
import Radio from '../radio';
import './rating-form.css';
import {required, nonEmpty, length, isTrimmed} from '../../validators';
const reviewLength = length({min: 1, max: 300});

export class RatingForm extends React.Component {
    onSubmit(values) {
        return fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                if (
                    res.headers.has('content-type') &&
                    res.headers
                        .get('content-type')
                        .startsWith('application/json')
                ) {
                    // It's a nice JSON error returned by us, so decode it
                    return res.json().then(err => Promise.reject(err));
                }
                // It's a less informative error returned by express
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
            return;
        })
        .then(() => console.log('Submitted with values', values))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
            return Promise.reject(
                new SubmissionError({
                    _error: 'Error submitting review'
                })
            );
        });
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Review posted
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
                <form
                    className="review-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {successMessage}
                    {errorMessage}
                    <Field 
                        component={Radio}
                        type="radio"
                        name="quality"
                        label="quality"
                        options={{
                            oneStar: "1 Star",
                            twoStar: "2 Star",
                            threeStar: "3 Star",
                            fourStar: "4 Star",
                            fiveStar: "5 Star"
                        }}
                        validate={[required]} 
                    />
                    <Field
                        component={Radio}
                        type="radio"
                        label="quantity"
                        name="quantity" 
                        options={{
                            oneStar: "1 Star",
                            twoStar: "2 Star",
                            threeStar: "3 Star",
                            fourStar: "4 Star",
                            fiveStar: "5 Star"
                        }}
                        validate={[required]}
                        /> 
                    <Field
                        component={Radio}
                        type="radio"
                        name="pricing"
                        label="pricing"
                        options={{
                            oneStar: "1 Star",
                            twoStar: "2 Star",
                            threeStar: "3 Star",
                            fourStar: "4 Star",
                            fiveStar: "5 Star"
                        }}
                        validate={[required]}
                    />
                    <Field
                        component={Input}
                        type="text"
                        placeholder="review..."
                        element="textarea"
                        name="textarea"
                        rows="10" 
                        cols="40"
                        validate={[required, reviewLength, nonEmpty, isTrimmed]}
                    />
                    <button
                        type="submit"
                        className="signup-button"
                        disabled={this.props.pristine || this.props.submitting}>
                        Post Review
                    </button>
                </form>
        )
    }
}

export default reduxForm({
    form: 'ratings',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('ratings', Object.keys(errors)[0]))
})(RatingForm);

