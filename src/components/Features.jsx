import React from 'react';
import '../styles/styles.scss';

const features = [
  'Интеграция с платёжными системами',
  'Мультиязычность',
  'SEO-оптимизация',
  'Аналитика и отчёты',
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Возможности</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
