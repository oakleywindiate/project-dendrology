import React, { useEffect, useState } from 'react';
import QuestionContainer from './Components/QuestionContainer';
import Form from './Components/Form';
import CorrectAnswer from './Components/CorrectAnswer';
import IncorrectAnswer from './Components/IncorrectAnswer';
import { Route, Link } from 'react-router-dom';
import Points from './Components/Points'; 
import WelcomePage from './Components/WelcomePage';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Header from './Components/Header';
import ReviewQuestionsContainer from './Components/ReviewQuestionsContainer';
import './App.css';

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
  const [showAnswer, setShowAnswer] = useState('')
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
      setError("An error has occurred with our testing AI. Please try again.")
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
      setShowAnswer(questions[position].scientific_name)
    } else {
      setButton(true)
      setIncorrectAnswer(true)
      setDecrementAnswer(decrementAnswer + 1)
      setReviewQuestions((reviewQuestions) => ([ ...reviewQuestions, randomizeQuesitons[position]]))
      setShowAnswer(questions[position].scientific_name)
    }
  }

  const nextQuestion = () => {
    setPosition(position + 1)
    setButton(false)
    setCorrectAnswer(false)
    setIncorrectAnswer(false)
    setShowAnswer('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <NavBar />
        <Link to="/test"> 
          <button className="enter-app-link">ENTER APP</button>
        </Link>
      </header>
      <main>
        <Route exact path='/home' render={() => 
          <WelcomePage 
            questions={randomizeQuesitons} 
            position={position} 
          />
          } />
        <Route exact path='/test' render={() => 
          <section className="question-wrapper">
            <QuestionContainer 
              questions={randomizeQuesitons}               
              position={position} 
              showAnswer={showAnswer}
            />
            <div className="test-buttons">
              <Form 
                submitValue={checkAnswer} 
              />
              <button id="nextButton" className="next-button" disabled={disableButton ? false : true} onClick={nextQuestion}>NEXT</button>
            </div>
            <div className="styling-points-correct">
              <div className="styling-correct-incorrect">
                {correctAnswer ? <Route exact path='/test' render={() =>               
                  <CorrectAnswer /> } /> : ''}  
                {incorrectAnswer ? <Route exact path='/test' render={() => 
                  <IncorrectAnswer /> } /> : ''}
              </div>
              <div className="styling-points">
                <Points 
                  incrementCorrectAnswer={incrementCorrectAnswer} 
                  decrementAnswer={decrementAnswer}
                />
              </div>
            </div>
          </section>   
          } /> 
        <Route exact path='/review' render={() =>           
          <ReviewQuestionsContainer 
            reviewQuestions={reviewQuestions} 
          />
        } />  
        <Route exact path='/about' render={() =>           
          <About 
          />
        } />  
      </main>
    </div>
  );
}

export default App;
