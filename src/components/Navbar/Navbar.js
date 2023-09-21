// src/components/Navbar.js

import React from 'react';
import './Navbar.css'; // Create this CSS file for styling

import logo2 from './logo2.png';
import odop2 from './odop.jpg';

const Navbar=()=> {
  return (
    <div className="navbar">
      <div className="logo-container">
        <div className="left-logo">
          <img src={logo2} alt="Logo" />
        </div>
        <div className="right-logo">
          <img src={odop2} alt="Logo 2" />
        </div>
      </div>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
