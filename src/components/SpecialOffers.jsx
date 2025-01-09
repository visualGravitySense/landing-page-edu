import React from "react";
import '../styles/styles.scss';
// import { FaGift, FaClock, FaPercentage } from "react-icons/fa";

const specialOffers = [
  {
    // icon: <FaGift className="icon" />,
    title: "Бонус за быстрый заказ",
    description: "Закажите проект до 31 января и получите лендинг для курса в подарок!",
  },
  {
    // icon: <FaClock className="icon" />,
    title: "Пробный период",
    description: "1 месяц бесплатной консультации по продвижению после запуска.",
  },
  {
    // icon: <FaPercentage className="icon" />,
    title: "Скидка 15%",
    description: "Только до 31 января — скидка 15% на создание школы + дизайн 5 постов!",
  },
];

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h3>Специальные предложения</h3>
      {specialOffers.map((offer, index) => (
        <div key={index} className="offer">
          {offer.icon}
          <div>
            <h4>{offer.title}</h4>
            <p>{offer.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialOffers;
