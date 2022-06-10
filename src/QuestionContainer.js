import React from 'react';
import Question from './Question';

const QuestionContainer = ({ questions, position }) => {
  console.log(questions)

  let error = 
  <div>
    Hello
  </div>

  return (
    <section className="card-section">
      {questions.length ? <Question question={questions[position]} key={questions[position]}/> : error}
    </section>
  )
}

export default QuestionContainer;
