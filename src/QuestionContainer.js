import React from 'react';
import Question from './Question';

const QuestionContainer = ({ questions, position }) => {
  return (
    <section className="card-section">
        <Question question={questions[position]} key={questions[position].id}/>
    </section>
  )
}

export default QuestionContainer;
