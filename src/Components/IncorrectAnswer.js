import React from 'react'

const IncorrectAnswer = () => {
    var sadPath = [
        "Keep going!",
        "Not quite",
        "Close!",
        "You can do this, keep trying.",
        "You've got this, don't stop now",
        "Practice makes perfect",
        "Don't think about the void, just think about trees",
        "Very close! Try again",
        "Almost there",
        "It's okay",
        "This is not even close",
        "Repetition will help, keep trying",
        "You've got this!",
        "I believe in you. Keep studying!",
        "Nice try.",
        "Keep your chin up!", 
        "Not all those who wander are lost... but you might be lost when it comes to knowing the correct answer here",
      ];
      
      var randomSadItem = sadPath[Math.floor(Math.random()*sadPath.length)];

  return (
    <div>{randomSadItem}</div>
  )
}

export default IncorrectAnswer;
