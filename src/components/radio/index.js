import React from 'react';

import { Field } from 'redux-form';

export const Radio = props => {
  if (props && props.input && props.options) {
    const renderRadioButtons = (key, index) => {
      return (
        <label className="radio-button" key={`${index}`} htmlFor={`${props.input.name}-${index}`}>
          <Field
            id={`${props.input.name}`}
            component="input"
            name={props.input.name}
            type="radio"
            value={key}
            className="mh2"
          />
          {props.options[key]}
        </label>
      )
    };
    return (
      <div className="radio-star">
        <div className="star-value">
          {props.label}
        </div>
        <div>
          {props.options &&
            Object.keys(props.options).map(renderRadioButtons)}
        </div>
      </div>
    );
  }
  return <div></div>
}

export default Radio;