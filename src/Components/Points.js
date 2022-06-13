import React from 'react';
import PropTypes from 'prop-types';
import './/Points.css';

const Points = ({ incrementCorrectAnswer, decrementAnswer }) => {
  return (
    <section className="points-section">
      <div>
        <h5 className="correct">{`Correct: ${incrementCorrectAnswer}`}</h5>
      </div>
      <div>
      <h5 className="incorrect">{`Incorrect: ${decrementAnswer}`}</h5>
      </div>
    </section>
  )
}

export default Points;

Points.propTypes = {
  incrementCorrectAnswer: PropTypes.number.isRequired,
  decrementAnswer: PropTypes.number.isRequired,
};
