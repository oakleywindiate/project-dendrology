import React from 'react';
import Question from './Question';

const QuestionContainer = ({ questions, position }) => {

  let error = 
  <div>
    "An error has occurred"
  </div>

  return (
    <section className="card-section">
      {questions.length ? <Question question={questions[position]} key={questions[position]}/> : error}
    </section>
  )
}

export default QuestionContainer;
