import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import './ReviewQuestions.css';

const ReviewQuestions = ({ common_name, scientific_name, id }) => {

  return (
    <section className="review-questions">
      <div>
        <FontAwesomeIcon className="faTree" icon={faTree} />
        <h2 key={id} className="review-common-name-title">Common name:</h2>
        <h3 className="review-common-name-name">{common_name}</h3>
      </div>
      <div>
        <h2 className="review-scientific-name-title">Scientific name:</h2>
        <h3 className="review-scientific-name-name">{scientific_name}</h3>
      </div>
    </section>
  )
}

export default ReviewQuestions;

ReviewQuestions.propTypes = {
  common_name: PropTypes.string.isRequired,
  scientific_name: PropTypes.string.isRequired,
};

ReviewQuestions.defaultProps = {
  id: 'number'
};


