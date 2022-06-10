import React from 'react'

const CorrectAnswer = () => {
    var happyPath = [
        "Nice!",
        "Nice job!",
        "Wow",
        "Impressive",
        "Wow! Nice job.",
        "Impressive!",
        "Keep up the good work!",
        "My god, you're a monster",
        "You are too good at this",
        "Technology will replace you soon, but good work for now",
      ];
      
      var randomHappyItem = happyPath[Math.floor(Math.random()*happyPath.length)];

  return (
    <div>{randomHappyItem}</div>
  )
}

export default CorrectAnswer;
