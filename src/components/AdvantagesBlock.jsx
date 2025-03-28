import React from 'react';
import '../styles/AdvantagesBlock.css'; // Файл для стилей

const AdvantagesBlock = () => {
  return (
    <section className="advantages-block">
      <div className="container">
        <h2 className="advantages-title">Все для вашей школы за короткий срок </h2>
        <p className="advantages-subtitle">
          Управление школой легко и просто!
        </p>
        <ul className="advantages-list">
          <li><b>Управление персоналом</b> - Контролируйте рабочие смены сотрудников, назначайте задачи и отслеживайте их выполнение в удобном интерфейсе.</li>
          <li><b>Контроль расписания</b> - Гибкое управление расписанием учителей, автоматические напоминания и синхронизация с календарем.</li>
          <li><b>Онлайн-запись</b> - Клиенты могут записываться через сайт или мобильное приложение в любое время суток.</li>
          <li><b>База клиентов</b> - Вся информация о клиентах в одном месте: история покупок, предпочтения и контактные данные.</li>
          <li><b>Программы лояльности</b> - Гибкая настройка скидок, бонусных программ и специальных предложений для постоянных клиентов.</li>
          <li><b>Учет доходов и расходов</b> - Автоматическое ведение финансового учета, включая контроль кассовых операций и расходов.</li>
          <li><b>Аналитика продаж</b> - Подробные отчеты о доходах, востребованных услугах и эффективности персонала для принятия стратегических решений.</li>
          <li><b>Различные способы оплаты</b> - Поддержка наличных, карт, мобильных платежей и онлайн-оплаты.</li>
          <li><b>Контроль скидок</b> - Гибкая настройка акций и скидок, автоматический учет промокодов.</li>
          <li><b>Поддержка 24/7</b> - Круглосуточная техническая поддержка для решения любых вопросов.</li>
          {/* <li>Обучение команды работе с платформой.</li> */}
          {/* <li>Постоянная техподдержка и советы по продвижению.</li> */}
          {/* <li>Обновления платформы без дополнительных затрат.</li> */}
        </ul>
        <a></a>
        <p className="advantages-call-to-action">
          <strong>Раскройте свой экспертный потенциал - мы сделаем вашу школу лучшей в нише!</strong>
        </p>

        <button
        className="cta-button"
        onClick={() => window.open('https://t.me/visual_sense', '_blank')}
      >
        Оставить заявку
      </button>
        
      </div>
    </section>
  );
};

export default AdvantagesBlock;
