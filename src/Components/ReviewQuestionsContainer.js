import React from 'react';
import ReviewQuestions from './ReviewQuestions';

const ReviewQuestionsContainer = ({ reviewQuestions, position }) => {

const populateQuestions = reviewQuestions.map((question) => {
    return (
        <section className="review-section">
          <ReviewQuestions 
            common_name={question.common_name} 
            scientific_name={question.scientific_name}
            key={question.id} 
          />
        </section>
     )
})

const error = 
  <div>
    "An error has occurred"
  </div>

  
return (
    <section className="review-section-wrapper">
      {reviewQuestions.length ? populateQuestions : error}
    </section>
    )
}

export default ReviewQuestionsContainer;