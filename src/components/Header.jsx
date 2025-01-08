import React from 'react';
import '../styles/styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Ваш Логотип</div>
        <nav className="nav">
          <a href="#advantages">Преимущества</a>
          <a href="#features">Возможности</a>
          <a href="#cta">Контакты</a>
        </nav>
        <button className="cta-button">Оставить заявку</button>
      </div>
    </header>
  );
};

export default Header;
