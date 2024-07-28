import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">One Life Health Care</div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#community">Community</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
