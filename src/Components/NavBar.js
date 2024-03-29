import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-link two">
      <NavLink to='/home'>
        <p className="home-link link">HOME</p>
      </NavLink>
      <NavLink to='/test'>
        <p className="test-link link">TEST</p>
      </NavLink>
      <NavLink to='/review'>
        <p className="incorrect-link link">REVIEW</p>
      </NavLink>
      <NavLink to='/about'>
        <p className="about-link link">ABOUT</p>
      </NavLink>
    </nav>  
    )
}

export default NavBar;
