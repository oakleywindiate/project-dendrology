import React, { useEffect, useState } from 'react';
import QuestionContainer from './Components/QuestionContainer';
import Form from './Components/Form';
import CorrectAnswer from './Components/CorrectAnswer';
import IncorrectAnswer from './Components/IncorrectAnswer';
import { Route } from 'react-router-dom';
import Points from './Components/Points'; 
import WelcomePage from './Components/WelcomePage';
import NavBar from './Components/NavBar';
import './App.css';
import ReviewQuestionsContainer from './Components/ReviewQuestionsContainer';

function App() {
  const [questions, setQuestions] = useState([])
  const [position, setPosition] = useState(0)
  const [randomizeQuesitons, setRandomQuestions] = useState([])
  const [disableButton, setButton] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [incorrectAnswer, setIncorrectAnswer] = useState(false)
  const [incrementCorrectAnswer, setIncrementCorrectAnswer] = useState(0)
  const [decrementAnswer, setDecrementAnswer] = useState(0)
  const [reviewQuestions, setReviewQuestions] = useState([])
  const [disableSubmitButton, setDisableSubmitButton] = useState(false)
  const [error, setError] = useState('')

  const getQuestions = async () => {
    const url = 'http://localhost:3001/test'
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
      setButton(true)
      setCorrectAnswer(true)
      setIncrementCorrectAnswer(incrementCorrectAnswer + 1)
    } else {
      setButton(true)
      setIncorrectAnswer(true)
      setDecrementAnswer(decrementAnswer + 1)
      setReviewQuestions((reviewQuestions) => ([ ...reviewQuestions, randomizeQuesitons[position]]))
    }
  }

  const nextQuestion = () => {
    setPosition(position + 1)
    setButton(false)
    setCorrectAnswer(false)
    setIncorrectAnswer(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>project+dendrology</h1>
        <NavBar />
      </header>
      <main>
        <Route exact path='/home' render={() => 
          <WelcomePage 
            questions={randomizeQuesitons} 
            position={position} 
          />
          } />
        <Route exact path='/test' render={() => 
          <section>
            <QuestionContainer 
              questions={randomizeQuesitons}               
              position={position} 
            />
            <Form 
              submitValue={checkAnswer} 
            />
            <button disabled={disableButton ? false : true} onClick={nextQuestion}>Next</button>
            {correctAnswer ? <Route exact path='/test' render={() =>               
              <CorrectAnswer /> } /> : ''}  
            {incorrectAnswer ? <Route exact path='/test' render={() => 
              <IncorrectAnswer /> } /> : ''}
            <Points 
              incrementCorrectAnswer={incrementCorrectAnswer} 
              decrementAnswer={decrementAnswer}
            />
          </section>   
          } /> 
        <Route exact path='/review' render={() =>           
          <ReviewQuestionsContainer 
            reviewQuestions={reviewQuestions} 
            position={position}
          />
        } />  
      </main>
    </div>
  );
}

export default App;
