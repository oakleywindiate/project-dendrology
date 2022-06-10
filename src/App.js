import React, { useEffect, useState } from 'react';
import QuestionContainer from './Components/QuestionContainer';
import Form from './Components/Form';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([])
  const [position, setPosition] = useState(0)
  const [randomizeQuesitons, setRandomQuestions] = useState([])
  const [error, setError] = useState('')

  const getQuestions = async () => {
    const url = 'http://localhost:3001'
    setError('')

    try {
      const response = await fetch(url)
      const loadQuestions = await response.json()
      setQuestions(loadQuestions)
      setRandomQuestions(loadQuestions.sort(() => Math.random() - .5))
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])

  const checkAnswer = (submitValue) => {
    if (submitValue === questions[position].scientific_name) {
      setPosition(position + 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>project+dendrology</h1>
      </header>
      <main>
        <QuestionContainer questions={randomizeQuesitons} position={position} />
        <Form submitValue={checkAnswer} />
      </main>
    </div>
  );
}

export default App;
