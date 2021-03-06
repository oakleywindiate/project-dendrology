import React from 'react';
import PropTypes from 'prop-types';
import ReviewQuestions from './ReviewQuestions';

const ReviewQuestionsContainer = ({ reviewQuestions }) => {

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
  <div className="review-section-error" key={"error"}>
    It's kinda empty in here...
  </div>

  
return (
    <section className="review-section-wrapper">
      {reviewQuestions.length ? populateQuestions : error}
    </section>
    )
}

export default ReviewQuestionsContainer;

ReviewQuestionsContainer.propTypes = {
  reviewQuestions: PropTypes.array.isRequired,
};
