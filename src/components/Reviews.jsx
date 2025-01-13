import React from 'react';
import '../styles/styles.scss';

const reviews = [
  {
    id: 1,
    name: 'Коновалова Ольга',
    feedback: 'Сайт для маркетолога и продюсера деловых мероприятий, и курс по PR.',
    link: 'https://visualgravitysense.github.io/olga-konovalova/'
  },
  {
    id: 2,
    name: 'Автошкола Виктория Нымме',
    feedback: 'Обновление бренда к 18 летию школы, новый сайт.',
    link: 'https://viktorijaautokool.ee/viktorija-ru/'
  },
  {
    id: 3,
    name: 'Силламяэская музыкальная школа',
    feedback: 'Освежение бренда, логотипа, описание всех программ и блог.',
    link: 'https://www.sillamaemk.ee/ru/'
  }
];

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <h2>Наши работы</h2>
        <div className="review-cards">
          {reviews.map((review) => (
            <div key={review.id} className="card">
              <h3>{review.name}</h3>
              <p>{review.feedback}</p>
              <a href={review.link} target="_blank" rel="noopener noreferrer" className="link">
                Посмотреть проект
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
