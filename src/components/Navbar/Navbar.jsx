import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        My Portfolio
      </a>
      <button className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
