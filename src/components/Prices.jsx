import React from 'react';
import '../styles/styles.scss';

const pricingPlans = [
  {
    title: "Базовый пакет",
    price: "15,000₽",
    features: [
      "Создание онлайн-школы",
      "Подключение базовых функций",
      "Обучение работе с платформой"
    ],
  },
  {
    title: "Продвинутый пакет",
    price: "30,000₽",
    features: [
      "Школа под ключ",
      "1 месяц ведения соцсетей",
      "Создание 3 рекламных кампаний"
    ],
  },
  {
    title: "Премиум пакет",
    price: "50,000₽",
    features: [
      "Всё из продвинутого пакета",
      "Разработка брендинга и фирменного стиля",
      "3 месяца ведения соцсетей"
    ],
  },
];

const specialOffers = [
  {
    title: "Бонус за быстрый заказ",
    description: "Закажите проект до 31 января и получите лендинг для курса в подарок!",
  },
  {
    title: "Пробный период",
    description: "1 месяц бесплатной консультации по продвижению после запуска.",
  },
  {
    title: "Скидка 15%",
    description: "Только до 31 января — скидка 15% на создание школы + дизайн 5 постов!",
  },
];

const Prices = () => {
  return (
    <section id="prices" className="prices">
      <div className="container">
        <h2>Цены и Предложения</h2>

        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="special-offers">
          <h3>Специальные предложения</h3>
          {specialOffers.map((offer, index) => (
            <div key={index} className="offer">
              <h4>{offer.title}</h4>
              <p>{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
