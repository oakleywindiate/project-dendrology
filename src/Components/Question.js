import React from 'react';
import './/Question.css'

const Question = ({ question }) => {
  return (
    <section className="question-section">
      <div>
        {question.common_name}
      </div>
      <div>
        {question.scientific_name}
      </div>
    </section>
  )
};

export default Question;