import React from 'react';

const ReviewQuestions = ({ common_name, scientific_name }) => {
    console.log(common_name)

  return (
    <section>
      <div>
          {common_name}
      </div>
      <div>
        {scientific_name}
      </div>
    </section>
  )
}

export default ReviewQuestions;
