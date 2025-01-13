import React from 'react';
import '../styles/styles.scss';

const HeroSection = () => {
  return (
    <section className="hero">
    <div className="container">
      <h1>
        <span className="highlight">Создайте</span> <br />
        <span className="dynamic-text">школу вашей мечты</span>
      </h1>
      <p>Быстро, профессионально и под ключ</p>
      <button className="cta-button">Оставить заявку</button>
    </div>
  </section>
  );
};

export default HeroSection;
