import React from 'react';
import Question from './Question';

const ReviewQuestionsContainer = ({ reviewQuestions, position }) => {

const error = 
  <div>
    "An error has occurred"
  </div>

  

  return (
    <section className="review-section">
      {reviewQuestions.length ? <Question question={reviewQuestions[position]} key={reviewQuestions[position]}/> : error}
    </section>
  )
}

export default ReviewQuestionsContainer;