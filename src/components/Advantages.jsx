import React from 'react';
import '../styles/styles.scss';

const advantages = [
  { id: 1, title: 'Готовые шаблоны', description: 'Моментальное создание школы.' },
  { id: 2, title: 'Экономия времени', description: 'Всё настраивается за вас.' },
  { id: 3, title: 'Поддержка 24/7', description: 'Мы всегда рядом.' },
];

const Advantages = () => {
  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <h2>Преимущества</h2>
        <div className="advantage-cards">
          {advantages.map((adv) => (
            <div key={adv.id} className="card">
              <h3>{adv.title}</h3>
              <p>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
