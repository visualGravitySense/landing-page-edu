import React from 'react';
import '../styles/styles.scss';

const pricingPlans = [
  {
    title: "Starter",
    price: "89 €/год",
    description: "Идеально для начала работы. Подходит для небольших школ или индивидуальных преподавателей, которые хотят запустить онлайн-курс.",
    features: [
      "Создание и продажа 1 курса",
      "Доступ к базовому функционалу платформы",
      "Простая настройка дизайна страницы курса",
      "Автоматическая обработка оплат",
    ],
    extras: "Бесплатный тестовый период — 14 дней",
  },
  {
    title: "Standard",
    price: "199 €/год",
    description: "Оптимальный выбор для средней школы. Подходит для образовательных организаций с несколькими курсами и потребностью в дополнительных инструментах для управления студентами.",
    features: [
      "Создание до 5 курсов",
      "Подключение базовой аналитики",
      "Возможность интеграции с CRM-системами",
      "Создание базового брендинга",
    ],
    extras: "",
  },
  {
    title: "Business Pro",
    price: "399 €/год",
    description: "Максимум возможностей для масштабирования. Идеально для школ, которые стремятся к профессиональному росту, и ценят премиум-функционал и поддержку.",
    features: [
      "Неограниченное количество курсов",
      "Расширенная аналитика и отчёты",
      "Подключение API для автоматизации ",
      "Интеграция с внешними сервисами",
    ],
    extras: "",
  },
];

const specialOffers = [
  {
    title: "Бонус за быстрый старт",
    description: "Закажите проект до 31 января и получите пакет из 10 рекламных баннеров для продвижения в соцсетях.",
  },
  {
    title: "Пробный период",
    description: "После запуска вашей онлайн-школы предоставляется поддержка в настройке рекламы и аналитики.",
  },
  // {
    // title: "Скидка 15%",
    // description: "Только до 31 января — скидка 15% на создание школы + дизайн 5 постов!",
  // },
];

const Prices = () => {
  return (
    <section id="plans" className="prices">
      <div className="container">
        <h2>Цены и Предложения</h2>

        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <p className="description">{plan.description}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="extras">
                <p>{plan.extras}</p>
              </div>
              {/* <button className="select-plan">Выбрать</button> */}

              <button
                className="select-plan"
                onClick={() => window.open('https://t.me/visual_sense', '_blank')}
              >
                Оставить заявку
              </button>
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
