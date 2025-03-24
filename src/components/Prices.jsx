import React from 'react';
import '../styles/styles.scss';

const pricingPlans = [
  {
    title: "Базовый",
    price: "9 €/мес",
    description: "Идеально для начала работы. Подходит для небольших школ или индивидуальных преподавателей, которые хотят запустить онлайн-курс.",
    features: [
        "Онлайн-запись клиентов",
        "Управление расписанием мастеров",
        "Базовая аналитика посещений",
        "Поддержка стандартных способов оплаты",
        "Доступ для одного администратора",
        "Круглосуточная техническая поддержка"
    ],
    extras: "",
  },
  {
    title: "Стандарт",
    price: "19 €/мес",
    description: "Оптимальный выбор для средней школы. Подходит для образовательных организаций с несколькими курсами и потребностью в дополнительных инструментах для управления студентами.",
    features: [
      "Все возможности базового тарифа",
      "CRM-система для хранения данных клиентов",
      "Автоматизация учета доходов и расходов",
      "Программы лояльности и скидки",
      "Интеграция с социальными сетями",
      "Доступ для нескольких администраторов",
    ],
    extras: "",
  },
  {
    title: "Про",
    price: "39 €/мес",
    description: "Максимум возможностей для масштабирования. Идеально для школ, которые стремятся к профессиональному росту, и ценят премиум-функционал и поддержку.",
    features: [
      "Все возможности стандартного тарифа",
      "Полная финансовая аналитика",
      "Интеграция с платежными системами и кассами",
      "Автоматизация маркетинговых рассылок",
      "Продвинутые рекламные инструменты",
      "Персональный менеджер поддержки",
    ],
    extras: "",
  },
];

const specialOffers = [
  {
    title: "Бонус за быстрый старт",
    description: "20% скидка при подключении в течение 7 дней после персонального предложения.",
  },
  {
    title: "Пробный период",
    description: "14 дней бесплатного тестирования без ограничений.",
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
                Оставить заявку в Telegram
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
