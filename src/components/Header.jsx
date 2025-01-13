import React from 'react';
import { useState } from "react";
import '../styles/styles.scss';
import logo from '../assets/digo-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Digo Logo" />
        {/* <img src="/src/assets/digo-logo.png" alt="Digo Logo" /> */}
      </div>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Открыть меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
        <a href="#advantages">Преимущества</a>
        <a href="#features">Возможности</a>
        <a href="#plans">Цены</a>
        <button
          className="cta-button"
          onClick={() => window.open('https://t.me/visual_sense', '_blank')}
        >
          Оставить заявку
        </button>
      </nav>
      
    </header>
  );
};

export default Header;