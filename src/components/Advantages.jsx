import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBolt, faClock, faHandsHelping, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.scss";
import cms from '../assets/cms.png';
import lms from '../assets/lms.png';
import widgets from '../assets/widgets.png';
import gamefication from '../assets/gamefication.png';


const advantages = [
  { id: 1, image: lms, title: 'Удобство для клиентов', description: 'Запись онлайн, смс-напоминания, быстрая оплата.' },
  { id: 2, image: cms, title: 'Упрощенное управление', description: 'Расписание, график работы, контроль записей.' },
  { id: 3, image: widgets, title: 'Автоматизация отчетов', description: 'Аналитика продаж, учет скидок, отслеживание финансов.' },
  { id: 4, image: gamefication, title: 'Интеграция с CRM', description: 'Контроль базы клиентов, программы лояльности.' },
];

const Advantages = () => {
  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <h2>Преимущества POS-систем для школ</h2>
        <div className="advantage-cards">
          {advantages.map((adv) => (
            <div key={adv.id} className="card">
              <div className="card-emoji">
                <img src={adv.image} alt="icon" />
              </div>
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
