import React from 'react';
import { useState } from "react";
import '../styles/styles.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Ваш Логотип</div>
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
        <a href="#contacts">Контакты</a>
        <button className="cta-button">Оставить заявку</button>
      </nav>
      
    </header>
  );
};

export default Header;