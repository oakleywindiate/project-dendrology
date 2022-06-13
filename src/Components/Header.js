import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import NavBar from './NavBar';
import './/Header.css'

const Header = () => {
  return (
    <section className="icon-section">
      <div className="icon-header">
        <FontAwesomeIcon className="header-icon" icon={faGlobe} />
        <h1 className="App-title">PROJECT+DENDROLOGY</h1>  
      </div>
        <button className="menu-button">MENU</button>  
    </section>
  )
}

export default Header;