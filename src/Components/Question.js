import React from 'react'

const Question = ({ question }) => {
  return (
    <section>
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