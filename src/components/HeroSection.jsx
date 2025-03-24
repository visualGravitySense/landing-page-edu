import React from 'react';
import '../styles/styles.scss';

const HeroSection = () => {
  return (
    <section className="hero">
    <div className="container">
      <h1>
        <span className="highlight">Современная POS-система</span> <br />
        <span className="dynamic-text">для вашей школы мечты</span>
      </h1>
      <p>Удобное управление, простой интерфейс, увеличение прибыли.</p>
      <button
        className="cta-button"
        onClick={() => window.open('https://t.me/visual_sense', '_blank')}
      >
        Оставить заявку в Telegram
      </button>
          </div>
  </section>
  );
};

export default HeroSection;
