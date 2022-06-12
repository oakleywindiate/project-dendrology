import React from 'react';
import Question from './Question';
import './/QuestionContainer.css';

const QuestionContainer = ({ questions, position, showAnswer }) => {

const error = 
  <div className="error-section">
    "An error has occurred"
  </div>

  

  return (
    <section className="card-section">
      {questions.length ? <Question question={questions[position]} showAnswer={showAnswer} key={questions[position]}/> : error}
    </section>
  )
}

export default QuestionContainer;
