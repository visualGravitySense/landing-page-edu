import React from 'react';
import '../styles/styles.scss';

const reviews = [
  { id: 1, name: 'Иван Иванов', feedback: 'Отличный сервис, всё быстро и качественно!' },
  { id: 2, name: 'Мария Петрова', feedback: 'Моя школа работает идеально, рекомендую!' },
  { id: 3, name: 'Алексей Смирнов', feedback: 'Поддержка 24/7 – это правда. Спасибо!' },
];

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <h2>Отзывы наших клиентов</h2>
        <div className="review-cards">
          {reviews.map((review) => (
            <div key={review.id} className="card">
              <h3>{review.name}</h3>
              <p>{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
