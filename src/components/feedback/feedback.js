import React from 'react';
import PropTypes from 'prop-types';
import css from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={css.btn}
          type="button"
          data-feedback={option}
          onClick={onLeaveFeedback}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.ProtoTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
