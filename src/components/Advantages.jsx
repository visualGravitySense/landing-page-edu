import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBolt, faClock, faHandsHelping, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.scss";

const advantages = [
  { id: 1, emoji: '📚', title: 'Система управления обучением', description: 'Управляйте курсами и отслеживайте прогресс студентов с легкостью.' },
  { id: 2, emoji: '⏱️', title: 'Система управления контентом', description: 'Создавайте и редактируйте контент без технических знаний.' },
  { id: 3, emoji: '💬', title: 'Виджеты и API', description: 'Интегрируйте курсы с другими сервисами и платформами.' },
  { id: 4, emoji: '🚀', title: 'Геймификация', description: 'Мотивируйте студентов через достижения и рейтинги.' },
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
