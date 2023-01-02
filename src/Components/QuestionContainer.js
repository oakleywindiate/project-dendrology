import React from 'react';
import Question from './Question';
import PropTypes from 'prop-types';
import './QuestionContainer.css';

const QuestionContainer = ({ questions, position, showAnswer }) => {

const error = 
  <div className="error-section">
    <h3 className="error-message">An error has occurred with our testing AI. Please try again.</h3>
  </div>

  

  return (
    <section className="card-section">
      {questions.length ? <Question question={questions[position]} showAnswer={showAnswer} key={questions[position]}/> : error}
    </section>
  )
}

export default QuestionContainer;

QuestionContainer.propTypes = {
  questions: PropTypes.array.isRequired,
  position: PropTypes.number.isRequired,
  showAnswer: PropTypes.string.isRequired,
};

