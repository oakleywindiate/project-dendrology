import React from 'react';
import './/IncorrectAnswer.css';


const IncorrectAnswer = () => {
    const sadPath = [
        "Keep going!",
        "Not quite. Keep studying!",
        "Close!",
        "You can do this, keep trying!",
        "You've got this, keep going!",
        "Practice makes perfect. Keep trying!",
        "Don't think about the void, just think about the trees.",
        "Very close! Try again.",
        "It's okay, keep studying.",
        "Repetition will help, keep trying.",
        "You've got this!",
        "I believe in you. Keep studying!",
        "The fate of the planet rests in your hands.",
      ];
      
      const randomSadItem = sadPath[Math.floor(Math.random()*sadPath.length)];

  return (
    <section className="incorrect-answer-section">
        <h2>Incorrect</h2>
        <div>
            {randomSadItem}    
        </div>
    </section>
  )
}

export default IncorrectAnswer;
