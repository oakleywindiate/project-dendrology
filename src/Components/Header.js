import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import './/Header.css'

const Header = () => {
  return (
    <section className="icon-section">
        <FontAwesomeIcon className="header-icon" icon={faGlobe} />
        <h1 className="App-title">PROJECT+DENDROLOGY</h1>     
    </section>
  )
}

export default Header;