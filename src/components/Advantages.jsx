import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBolt, faClock, faHandsHelping, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.scss";
import cms from '../assets/cms.png';
import lms from '../assets/lms.png';
import widgets from '../assets/widgets.png';
import gamefication from '../assets/gamefication.png';


const advantages = [
  { id: 1, image: lms, title: 'Система управления', description: 'Управляйте курсами и отслеживайте прогресс.' },
  { id: 2, image: cms, title: 'Система для контента', description: 'Создавайте и редактируйте контент.' },
  { id: 3, image: widgets, title: 'Виджеты и API', description: 'Интегрируйте курсы с другими сервисами и платформами.' },
  { id: 4, image: gamefication, title: 'Геймификация', description: 'Мотивируйте студентов через достижения и рейтинги.' },
];

const Advantages = () => {
  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <h2>Преимущества</h2>
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
