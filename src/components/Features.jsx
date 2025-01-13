import React from 'react';
import '../styles/styles.scss';
import { FaMoneyBillWave, FaGlobe, FaSearch, FaChartLine, FaMobileAlt, FaUserShield, FaCogs, FaPaintBrush, FaTasks } from "react-icons/fa";


const features = [
  {
    id: 1,
    title: "Интеграция с платёжными системами",
    description: "Позволяет принимать оплату через популярные сервисы, включая карты, PayPal и другие.",
    icon: <FaMoneyBillWave />,
  },
  {
    id: 2,
    title: "Мультиязычность",
    description: "Поддержка нескольких языков для пользователей из разных стран.",
    icon: <FaGlobe />,
  },
  {
    id: 3,
    title: "SEO-оптимизация",
    description: "Автоматизированные настройки SEO для лучшего ранжирования сайта в поисковых системах.",
    icon: <FaSearch />,
  },
  {
    id: 4,
    title: "Аналитика и отчёты",
    description: "Подробная статистика о трафике, продажах и других ключевых метриках.",
    icon: <FaChartLine />,
  },
  {
    id: 5,
    title: "Мобильная адаптация",
    description: "Идеальная работа на всех устройствах, включая смартфоны и планшеты.",
    icon: <FaMobileAlt />,
  },
  {
    id: 6,
    title: "Управление пользователями",
    description: "Гибкая система ролей и доступа для администраторов и пользователей.",
    icon: <FaUserShield />,
  },
  {
    id: 7,
    title: "Автоматизация процессов",
    description: "Экономия времени за счёт автоматических уведомлений и интеграций.",
    icon: <FaCogs />,
  },
  {
    id: 8,
    title: "Кастомизация дизайна",
    description: "Настройка внешнего вида под ваш бренд. Создание нового бренда или редизайн старого.",
    icon: <FaPaintBrush />,
  },
  {
    id: 9,
    title: 'Интерактивные задания',
    description: 'Создание тестов, опросов и упражнений для вовлечения студентов и проверки их знаний в реальном времени.',
    icon: <FaTasks />,
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Возможности</h2>
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
