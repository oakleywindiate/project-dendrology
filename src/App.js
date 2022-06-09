import React, { useEffect, useState } from 'react';
import QuestionContainer from './QuestionContainer';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState('')

  const getQuestions = async () => {
    const url = 'http://localhost:3001'
    setError('')

    try {
      const response = await fetch(url)
      const loadQuestions = await response.json()
      setQuestions(loadQuestions)
    } catch(error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>project+dendrology</h1>
      </header>
      <main>
        <QuestionContainer questions={questions} />
      </main>
    </div>
  );
}

export default App;
