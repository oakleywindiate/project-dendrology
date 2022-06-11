import React from 'react';
import ReviewQuestions from './ReviewQuestions';

const ReviewQuestionsContainer = ({ reviewQuestions, position }) => {

const populateQuestions = reviewQuestions.map((question, index) => {
    return (
        <section className="review-section">
          <ReviewQuestions 
            common_name={question.common_name} 
            scientific_name={question.scientific_name}
            key={index} 
          />
        </section>
     )
})

const error = 
  <div key={"error"}>
    It's kinda empty in here...
  </div>

  
return (
    <section className="review-section-wrapper">
      {reviewQuestions.length ? populateQuestions : error}
    </section>
    )
}

export default ReviewQuestionsContainer;