import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBolt, faClock, faHandsHelping, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.scss";

const advantages = [
  { id: 1, emoji: '📚', title: 'Готовые шаблоны', description: 'Моментальное создание школы.' },
  { id: 2, emoji: '⏱️', title: 'Экономия времени', description: 'Всё настраивается за вас.' },
  { id: 3, emoji: '💬', title: 'Поддержка 24/7', description: 'Мы всегда рядом.' },
  { id: 4, emoji: '🚀', title: 'Быстрый запуск', description: 'Начните за считанные минуты.' },
];

const Advantages = () => {
  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <h2>Преимущества</h2>
        <div className="advantage-cards">
          {advantages.map((adv) => (
            <div key={adv.id} className="card">
              <div className="card-emoji">{adv.emoji}</div>
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
