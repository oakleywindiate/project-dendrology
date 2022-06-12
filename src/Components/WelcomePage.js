import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './/WelcomePage.css'

const WelcomePage = () => {
  return (
    <section className="welcome-wrapper">
      <section className="welcome-section">
        <div className="welcome-page-text">
          <h2 className="welcome-page-h2">The New Way to Study</h2>
          <h3 className="welcome-page-h3">Intuitive and efficient studying platform</h3>
          <div className="welcome-page-buttons">
            <Link to="/test">
              <button className="enter-app-welcome-page">ENTER APP</button>
            </Link>
            <Link to="/about">
              <button className="about-us-welcome-page">LEARN MORE</button>
            </Link>
          </div>
        </div>
        <div className="welcome-page-user">
          <FontAwesomeIcon className="welcome-astronaut" icon={faUserAstronaut} />
        </div>
      </section>
      <section className="display-section">
        <div className="display one">
          <h4>TRAIN</h4>
          <h5>Work your mind daily</h5>
        </div>
        <div className="display two">
          <h4>LEARN</h4>
          <h5>Review your weak spots</h5>
        </div>
        <div className="display three">
          <h4>GAIN</h4>
          <h5>Feel confident in your knowledge</h5>
        </div>
      </section>
    </section>  
  )
}

export default WelcomePage;
