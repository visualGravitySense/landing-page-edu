import React from 'react';
import '../styles/styles.scss';

const features = [
  {
    id: 1,
    title: 'Интеграция с платёжными системами',
    description: 'Позволяет принимать оплату через популярные сервисы, включая карты, PayPal и другие.',
  },
  {
    id: 2,
    title: 'Мультиязычность',
    description: 'Поддержка нескольких языков для пользователей из разных стран.',
  },
  {
    id: 3,
    title: 'SEO-оптимизация',
    description: 'Автоматизированные настройки SEO для лучшего ранжирования сайта в поисковых системах.',
  },
  {
    id: 4,
    title: 'Аналитика и отчёты',
    description: 'Подробная статистика о трафике, продажах и других ключевых метриках.',
  },
  {
    id: 5,
    title: 'Мобильная адаптация',
    description: 'Идеальная работа на всех устройствах, включая смартфоны и планшеты.',
  },
  {
    id: 6,
    title: 'Управление пользователями',
    description: 'Гибкая система ролей и доступа для администраторов и пользователей.',
  },
  {
    id: 7,
    title: 'Автоматизация процессов',
    description: 'Экономия времени за счёт автоматических уведомлений и интеграций.',
  },
  {
    id: 8,
    title: 'Кастомизация дизайна',
    description: 'Настройка внешнего вида под ваш бренд без программирования.',
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
