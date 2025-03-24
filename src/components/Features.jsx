import React from 'react';
import '../styles/styles.scss';
import { FaMoneyBillWave, FaGlobe, FaSearch, FaChartLine, FaMobileAlt, FaUserShield, FaCogs, FaPaintBrush, FaTasks } from "react-icons/fa";


const features = [
  {
    id: 1,
    title: "Гибкие акции и скидки",
    description: "Создавайте уникальные предложения для новых и постоянных клиентов, повышая лояльность.",
    icon: <FaMoneyBillWave />,
  },
  {
    id: 2,
    title: "Интеграция с соцсетями",
    description: "Возможность публиковать записи и акции в социальных сетях напрямую из системы.",
    icon: <FaGlobe />,
  },
  {
    id: 3,
    title: "SEO-оптимизация",
    description: "Ваш сайт будет отображаться выше в поисковой выдаче и привлекать больше клиентов.",
    icon: <FaSearch />,
  },
  {
    id: 4,
    title: "Продвинутая аналитика",
    description: "Подробные отчеты по трафику сайта, источникам клиентов и эффективности маркетинговых кампаний.",
    icon: <FaChartLine />,
  },
  {
    id: 5,
    title: "Быстрая загрузка сайта",
    description: "Оптимизированный код и серверные решения обеспечивают высокую скорость загрузки страниц.",
    icon: <FaMobileAlt />,
  },
  {
    id: 6,
    title: "Отзывы и рейтинги",
    description: "Клиенты могут оставлять отзывы, а вы – анализировать их для улучшения сервиса.",
    icon: <FaUserShield />,
  },
  {
    id: 7,
    title: "Автоматические рассылки",
    description: "Отправка напоминаний, акций и персонализированных предложений для повышения продаж.",
    icon: <FaCogs />,
  },
  {
    id: 8,
    title: "Рекламные кампании",
    description: "Управляйте контекстной рекламой и продвижением через встроенные инструменты.",
    icon: <FaPaintBrush />,
  },
  {
    id: 9,
    title: 'Онлайн-запись',
    description: 'Клиенты могут записываться прямо с сайта, не выходя из дома.',
    icon: <FaTasks />,
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Возможности для маркетинга</h2>
        <div className="features-cards">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
