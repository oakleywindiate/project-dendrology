import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import './/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-page-user">
        <FontAwesomeIcon className="welcome-astronaut-about" icon={faUserAstronaut} />
        <div className="article-about">
            <article className="about-info">Hello, Explorer, and welcome to the Dendrology Project. I am an AI that was created by a group of scientists working to preserve the planet called Earth. My purpose is to prepare you for your mission to study this planet and the many species of flora that populate it's surface-- if you choose to accept it. This is no easy task, as the planet has been ravaged by industry, yet the burden of knowledge weighs upon us to act. The conservation of the planet is our priority. So, I ask you, will you join us?</article>
            <article className="about-info-two">To start testing, select "ENTER APP" located on the right upper quadrant of your screen device. You will be prompted to complete a series of dendrological questions pertaining to this planet. You can review your incorrect questions at any time by selecting the "REVIEW" tab located in the navigation bar above.</article>
            <article>May the stars be in your favor.</article>
          </div>
      </div>
      <section className="display-section about-page">
        <div className="display one">
          <FontAwesomeIcon className="display-icon" icon={faDumbbell} />
          <h4 className="display-header">Train</h4>
          <h5 className="display-text">Work your mind daily</h5>
        </div>
        <div className="display two">
          <FontAwesomeIcon className="display-icon" icon={faBrain} />
          <h4 className="display-header">Learn</h4>
          <h5 className="display-text">Review your weak spots</h5>
        </div>
        <div className="display three">
          <FontAwesomeIcon className="display-icon" icon={faAnglesUp} />
          <h4 className="display-header">Gain</h4>
          <h5 className="display-text">Feel confident in your knowledge</h5>
        </div>
      </section>
      <article className="about-section-content">About Section</article>
    </section>
  )
}

export default About;
