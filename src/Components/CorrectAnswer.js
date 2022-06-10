import React from 'react'

const CorrectAnswer = () => {
    var happyPath = [
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
      
      var randomHappyItem = happyPath[Math.floor(Math.random()*happyPath.length)];

  return (
    <div>
    <h2>Correct</h2>
    <div>
        {randomHappyItem}    
    </div>
</div>
  )
}

export default CorrectAnswer;
