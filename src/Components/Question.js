import React from 'react';
import PropTypes from 'prop-types';
import './Question.css'

const Question = ({ question, showAnswer }) => {
  return (
    <section className="question-section">
      <div className="common-name">
        {`COMMON NAME: ${question.common_name}`}
      </div>
      <div className="scientific-name">
        {`SCIENTIFIC NAME: ${showAnswer}`}
      </div>
    </section>
  )
};

export default Question;

Question.propTypes = {
  question: PropTypes.object.isRequired
};

Question.defaultProps = {
  showAnswer: 'string'
};