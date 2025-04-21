import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const faqCategories = {
    general: {
      title: 'General Questions',
      questions: [
        {
          question: 'What types of courses can use this quiz platform?',
          answer: 'Our platform is designed to be versatile and supports virtually any subject area including music education, driving schools, cryptocurrency courses, language learning, professional certifications, and academic subjects. The customizable templates adapt to any learning scenario.'
        },
        {
          question: 'Do I need technical skills to create quizzes?',
          answer: 'Not at all! Our platform features an intuitive markdown editor that requires no coding knowledge. If you can write an email, you can create engaging interactive quizzes for your students.'
        },
        {
          question: 'Can I try before subscribing?',
          answer: 'Yes! We offer a free tier that allows you to create basic quizzes and experience the core functionality. This lets you test the platform with your students before committing to a paid subscription.'
        }
      ]
    },
    educators: {
      title: 'For Educators',
      questions: [
        {
          question: 'How detailed are the analytics for student performance?',
          answer: 'Our analytics dashboard provides comprehensive insights including completion rates, time spent per question, most challenging topics, improvement over time, and individual student progress. These metrics help you identify exactly where your students need additional support.'
        },
        {
          question: 'Can I import my existing quiz content?',
          answer: 'Absolutely! We support importing questions from common formats including CSV, Excel, Google Forms, and most LMS exports. Our conversion tool will automatically format your existing content for our platform.'
        },
        {
          question: 'How do I identify which concepts my students are struggling with?',
          answer: 'Our gap analysis tool automatically highlights topics where students consistently underperform, allowing you to quickly identify areas that need additional instruction or clarification.'
        }
      ]
    },
    students: {
      title: 'For Students',
      questions: [
        {
          question: 'How does the adaptive difficulty work?',
          answer: 'Our system analyzes your performance in real-time and adjusts the difficulty of questions accordingly. As you master concepts, the questions become more challenging. If you struggle with certain topics, the system provides more foundational questions until you build confidence.'
        },
        {
          question: "How do leaderboards work? I'm concerned about privacy.",
          answer: 'Leaderboards are optional and can be configured by instructors. Students can use display names or aliases instead of real names. Additionally, instructors can create small group leaderboards rather than class-wide competitions if preferred.'
        },
        {
          question: 'Can I access quizzes on my mobile device?',
          answer: 'Yes! Our platform is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. Your progress syncs across all devices, so you can start on your computer and continue on your phone.'
        }
      ]
    },
    technical: {
      title: 'Technical Questions',
      questions: [
        {
          question: "Can the platform integrate with my school's existing LMS?",
          answer: 'Yes! We offer seamless integration with popular learning management systems including Canvas, Blackboard, Moodle, Google Classroom, and more. Our API also allows for custom integrations with proprietary systems.'
        },
        {
          question: 'How secure is student data on your platform?',
          answer: 'We take data security very seriously. All data is encrypted both in transit and at rest. We are FERPA compliant for educational institutions in the US and GDPR compliant for European users. We never sell user data to third parties.'
        },
        {
          question: 'Do you offer white-labeling for institutions?',
          answer: "Yes! Our Enterprise tier includes white-labeling options that allow you to customize the platform with your institution's branding, colors, and logo, creating a seamless experience for your students."
        }
      ]
    },
    pricing: {
      title: 'Pricing and Support',
      questions: [
        {
          question: 'What pricing options are available?',
          answer: 'We offer flexible pricing tiers based on your needs:\n- Free: Basic quiz functionality for individual educators\n- Standard: Advanced features for small teams ($X/month)\n- Professional: Complete toolkit for departments ($Y/month)\n- Enterprise: Custom solutions for institutions (contact for pricing)'
        },
        {
          question: 'What kind of support do you provide?',
          answer: 'All paid tiers include email support with 24-hour response time. Professional and Enterprise tiers also include live chat support and dedicated onboarding sessions. Our extensive knowledge base and video tutorials are available to all users.'
        },
        {
          question: 'Do you offer discounts for educational institutions?',
          answer: 'Yes! We offer special pricing for K-12 schools, universities, and non-profit educational organizations. Contact our sales team for educational discount information.'
        }
      ]
    }
  };

  return (
    <section className="faq-section">
      <div className="glass-container">
        <div className="glass-content">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Frequently Asked Questions
          </h2>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(faqCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`glass-button px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'glass-button-active'
                    : ''
                }`}
              >
                {faqCategories[category].title}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-10 text-white/90 text-center">
              {faqCategories[activeCategory].title}
            </h3>
            <div className="space-y-8">
              {faqCategories[activeCategory].questions.map((faq, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 rounded-2xl transition-all hover:scale-[1.02]"
                  data-active="true"
                >
                  <h4 className="text-lg font-semibold mb-4 text-white">
                    {faq.question}
                  </h4>
                  <p className="text-white/80 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 