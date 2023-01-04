import React from 'react';
import './CorrectAnswer.css';


const CorrectAnswer = () => {
    const happyPath = [
        "Nice!",
        "Nice job!",
        "Wow",
        "Impressive",
        "Wow!",
        "Impressive!",
        "Keep up the good work!",
        "My god, you're a dendrology monster.",
        "You are too good at this.",
        "Amazing!",
        "Great job!",
        "Nice job!",
        "Technology will replace you soon, but good work for now",
      ];
      
      const randomHappyItem = happyPath[Math.floor(Math.random()*happyPath.length)];

  return (
    <section className="correct-answer-section">
      <h2>Correct</h2>
      <div>
          {randomHappyItem}    
      </div>
    </section>
  )
}

export default CorrectAnswer;
