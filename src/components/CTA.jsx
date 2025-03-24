import React from 'react';
import '../styles/styles.scss';

const CTA = () => {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <h2>Готовы начать?</h2>
        <p>Свяжитесь с нами, чтобы узнать больше о создании вашей школы под ключ.</p>
        {/* <button className="cta-button">Заказать консультацию</button> */}

        <button
                className="cta-button"
                onClick={() => window.open('https://t.me/visual_sense', '_blank')}
              >
                Заказать консультацию в Telegram
              </button>
      </div>
    </section>
  );
};

export default CTA;
