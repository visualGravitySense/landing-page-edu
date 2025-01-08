import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faClock, faHandsHelping, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.scss";

const advantages = [
  {
    id: 1,
    title: "Готовые шаблоны",
    description: "Моментальное создание школы.",
    icon: faBolt, // Иконка для каждого преимущества
  },
  {
    id: 2,
    title: "Экономия времени",
    description: "Всё настраивается за вас.",
    icon: faClock,
  },
  {
    id: 3,
    title: "Поддержка 24/7",
    description: "Мы всегда рядом.",
    icon: faHandsHelping,
  },
  {
    id: 4,
    title: "Защита данных",
    description: "Ваши данные под надежной защитой.",
    icon: faShieldAlt,
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <h2>Преимущества</h2>
        <div className="advantage-cards">
          {advantages.map((adv) => (
            <div key={adv.id} className="card">
              {/* Иконка над заголовком */}
              <FontAwesomeIcon icon={adv.icon} size="2x" className="card-icon" />
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
