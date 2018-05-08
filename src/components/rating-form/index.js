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
    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
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


// previous solution...
// <form id="review-form">
//     <div className="review-section">
//         <p>Select your ratings</p>
//         <div className="quantity-rating">
//             <label for="quantity-rating">Quantity</label>
//             <input type="radio" name="quantity" value="1" className="quanity-radio"/>
//             <label for="quantity">
//                 <span>1 Star</span>
//             </label>
//             <input type="radio" name="quantity" value="2" className="quanity-radio"/>
//             <label for="quantity">
//                 <span>2 Star</span>
//             </label>
//             <input type="radio" name="quantity" value="3" className="quanity-radio"/>
//             <label for="quantity">
//                 <span>3 Star</span>
//             </label>
//             <input type="radio" name="quantity" value="4" className="quanity-radio"/>
//             <label for="quantity">
//                 <span>4 Star</span>
//             </label>
//             <input type="radio" name="quantity" value="5" className="quanity-radio"/>
//             <label for="quantity">
//                 <span>5 Star</span>
//             </label>
//         </div>
//         <div className="quality-rating">
//             <label for="quality-rating">Quality</label>
//             <input type="radio" name="quality" value="1" className="quality-radio"/>
//             <label for="quality">
//                 <span>1 Star</span>
//             </label>
//             <input type="radio" name="quality" value="2" className="quality-radio"/>
//             <label for="quality">
//                 <span>2 Star</span>
//             </label>
//             <input type="radio" name="quality" value="3" className="quality-radio"/>
//             <label for="quantity">
//                 <span>3 Star</span>
//             </label>
//             <input type="radio" name="quality" value="4" className="quality-radio"/>
//             <label for="quality">
//                 <span>4 Star</span>
//             </label>
//             <input type="radio" name="quality" value="5" className="quality-radio"/>
//             <label for="quality">
//                 <span>5 Star</span>
//             </label>
//         </div>
//         <div className="price-rating">
//             <label for="price-rating">Price</label>
//             <input type="radio" name="price" value="1" className="price-radio"/>
//             <label for="price">
//                 <span>$</span>
//             </label>
//             <input type="radio" name="price" value="2" className="price-radio"/>
//             <label for="price">
//                 <span>$$</span>
//             </label>
//             <input type="radio" name="price" value="3" className="price-radio"/>
//             <label for="price">
//                 <span>$$$</span>
//             </label>
//             <input type="radio" name="price" value="4" className="price-radio"/>
//             <label for="quality">
//                 <span>$$$$</span>
//             </label>
//         </div>
//     </div>
//     <div className="review-writing-section">
//         <label for="review-summary">Review summary</label>
//         <textarea name="review-summary" rows="15" cols="70"></textarea>
//     </div>
//     <button type="submit" className="rate-submit-button">Post Review</button>
// </form>

