import React from 'react';
import Question from './Question';

const QuestionContainer = ({ questions }) => {
  return (
    <div className="card-section">
        {questions.map(question => {
          return <Question question={question} key={question.id}/>
        })}
    </div>
  )
}

export default QuestionContainer;
