import React from 'react';

const ReviewQuestions = () => {

fetch('http://localhost:3001/incorrect', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify()
}).then(() => {
    console.log("Incorrect question added")
})


  return (
    <div>ReviewQuestions</div>
  )
}

export default ReviewQuestions;
