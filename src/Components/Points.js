import React from 'react';

const Points = ({ incrementCorrectAnswer, decrementAnswer }) => {
  return (
    <section>
      <div>
        {incrementCorrectAnswer}
      </div>
      <div>
        {decrementAnswer}
      </div>
    </section>
  )
}

export default Points;
