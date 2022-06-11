import React from 'react'
import { NavLink } from 'react-router-dom';
import './/NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-link">
      <NavLink to='/home'>
        <p className="home-link">HOME</p>
      </NavLink>
      <NavLink to='/test'>
        <p className="test-link">TEST</p>
      </NavLink>
      <NavLink to='/review'>
        <p className="incorrect-link">REVIEW</p>
      </NavLink>
      <NavLink to='/about'>
        <p className="about-link">ABOUT</p>
      </NavLink>
    </nav>  
    )
}

export default NavBar;
