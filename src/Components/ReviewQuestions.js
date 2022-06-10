import React from 'react';

const ReviewQuestions = ({ reviewQuestions }) => {

  return (
    <section>
      <div>
        {reviewQuestions.common_name}
      </div>
      <div>
        {reviewQuestions.scientific_name}
      </div>
    </section>
  )
}

export default ReviewQuestions;
