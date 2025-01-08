import React from 'react';
import '../styles/styles.scss';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Ваша компания. Все права защищены.</p>
        <nav>
          <a href="#advantages">Преимущества</a>
          <a href="#features">Возможности</a>
          <a href="#cta">Контакты</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
