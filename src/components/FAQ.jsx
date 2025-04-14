import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'When will EduQuest be available?',
      answer: 'We\'re currently in final development and plan to launch in Q3 2025. Sign up to get early access and be notified when we go live.'
    },
    {
      question: 'What subjects does EduQuest support?',
      answer: 'EduQuest supports any subject matter. Our platform provides tools for content creators to develop interactive quizzes for any field of study, from mathematics and science to language arts and humanities.'
    },
    {
      question: 'How much will EduQuest cost?',
      answer: 'We\'ll offer both free and premium tiers. The free tier will include basic quiz creation and participation, while premium features like advanced analytics and additional gamification elements will be available in paid tiers. Pricing details will be announced closer to launch.'
    },
    {
      question: 'Can I use EduQuest for my classroom or organization?',
      answer: 'Absolutely! EduQuest is designed for both individual educators and organizations. We\'ll offer special pricing for schools, universities, and corporate training departments with features tailored to institutional needs.'
    },
    {
      question: 'How is EduQuest different from other quiz platforms?',
      answer: 'EduQuest combines the best elements of interactive learning with sophisticated gamification that makes education inherently engaging. Our platform uses AI to personalize learning experiences and provides rich analytics that help both educators and learners track progress effectively.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className={`${index !== faqs.length - 1 ? 'border-b border-gray-200 pb-6' : 'pb-6'}`}>
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 