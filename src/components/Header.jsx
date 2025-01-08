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
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        aria-label="Открыть меню"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <a href="#advantages">Преимущества</a>
        <a href="#features">Возможности</a>
        <a href="#contacts">Контакты</a>
      </nav>

      <button className="cta-button">Оставить заявку</button>
      
    </header>
  );
};

export default Header;