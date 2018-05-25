import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postRating } from "../../actions/rating";
import Input from "../input";
import Radio from "../radio";
import "./rating-form.css";
import { required, nonEmpty, length } from "../../validators";
const reviewLength = length({ min: 1, max: 500 });

export class RatingForm extends React.Component {
  onSubmit(values) {
    const { quality, quantity, textarea, pricing } = values;
    const userId = this.props.user.id;
    const userFirstName = this.props.user.firstName;
    const userLastName = this.props.user.lastName;
    const userZipcode = this.props.user.zipcode;
    const userCityState = this.props.user.citystate;
    const userCreated = this.props.user.created;
    const restId = this.props.place_id;
    const rating = {
      userId,
      userFirstName,
      userLastName,
      userZipcode,
      userCityState,
      userCreated,
      restId,
      quality,
      quantity,
      pricing,
      textarea
    };
    return this.props.dispatch(postRating(rating));
  }

  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">Review posted</div>
      );
      this.props.history.push(`/place/${this.props.place_id}`);
    }
    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }
    let placeholdertext = `Your review helps others learn about great local businesses.

Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.`;
    return (
      <form
        className="review-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {successMessage}
        {errorMessage}
        <div className="review-form-border">
          <Field
            component={Radio}
            type="radio"
            name="quality"
            label="Quality"
            options={{
              1: "1 Star",
              2: "2 Star",
              3: "3 Star",
              4: "4 Star",
              5: "5 Star"
            }}
            validate={[required]}
          />
          <Field
            component={Radio}
            type="radio"
            name="quantity"
            label="Quantity"
            options={{
              1: "1 Star",
              2: "2 Star",
              3: "3 Star",
              4: "4 Star",
              5: "5 Star"
            }}
            validate={[required]}
          />
          <Field
            component={Radio}
            type="radio"
            name="pricing"
            label="Pricing"
            options={{
              1: "1 Star",
              2: "2 Star",
              3: "3 Star",
              4: "4 Star",
              5: "5 Star"
            }}
            validate={[required]}
          />
          <Field
            component={Input}
            type="text"
            placeholder={placeholdertext}
            element="textarea"
            name="textarea"
            rows="10"
            cols="40"
            validate={[required, reviewLength, nonEmpty]}
          />
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={this.props.pristine || this.props.submitting}
        >
          Post Review
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  place_id: state.search.id,
  user: state.auth.currentUser
});

RatingForm = reduxForm({
  form: "ratings",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("ratings", Object.keys(errors)[0]))
})(RatingForm);

export default withRouter(connect(mapStateToProps)(RatingForm));
