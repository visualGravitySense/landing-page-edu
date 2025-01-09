import React from 'react';
import '../styles/styles.scss';

const processSteps = [
  { id: 1, emoji: '📝', title: 'Оформление заявки', description: 'Вы отправляете запрос с описанием задачи.' },
  { id: 2, emoji: '📞', title: 'Связь с менеджером', description: 'Мы уточняем детали и составляем план.' },
  { id: 3, emoji: '🚀', title: 'Запуск проекта', description: 'Начинаем выполнение и держим вас в курсе.' },
  { id: 4, emoji: '✅', title: 'Результат', description: 'Вы получаете готовый проект в срок.' },
];

const Process = () => {
  return (
    <section id="process" className="process">
      <div className="container">
        <h2>Процесс работы</h2>
        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.id} className="step-card">
              <div className="step-emoji">{step.emoji}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
