import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={`nav-links ${showLinks ? 'show-links' : ''}`}>
          <li><a href="#home" className="nav-link">home</a></li>
          <li><a href="#about" className="nav-link">about</a></li>
          <li><a href="#services" className="nav-link">services</a></li>
          <li><a href="#tours" className="nav-link">tours</a></li>
        </ul>
        <ul className="nav-icons">
          <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="nav-icon"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="nav-icon"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.squarespace.com" target="_blank" rel="noreferrer" className="nav-icon"><i className="fab fa-squarespace"></i></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
