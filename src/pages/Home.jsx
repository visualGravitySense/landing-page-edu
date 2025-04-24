import { Link } from 'react-router-dom';
import '../styles/shared.css';
import { courses } from '../data/courses';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  AcademicCapIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const pricingPlans = [
  {
    title: "Starter Package",
    price: "79",
    description: "Perfect for individual learners starting their educational journey with our platform.",
    features: [
      "Access to 3 courses of choice",
      "3 months access period",
      "Basic learning analytics",
      "Community forum access",
      "Email support",
      "Course completion certificate"
    ],
    extras: "Best for individual learners",
  },
  {
    title: "Professional Bundle",
    price: "199",
    description: "Comprehensive solution for committed learners seeking professional development.",
    features: [
      "Access to all courses",
      "6 months access period",
      "Advanced learning analytics",
      "Priority support",
      "1-on-1 mentoring session",
      "Industry certification",
      "Networking events access",
      "Career guidance session"
    ],
    extras: "Most popular choice",
  },
  {
    title: "Enterprise Plan",
    price: "599",
    description: "Complete solution for educational institutions and organizations.",
    features: [
      "Unlimited team access",
      "12 months access period",
      "Custom learning paths",
      "Team analytics dashboard",
      "Dedicated success manager",
      "Custom course creation",
      "White-label options",
      "API access"
    ],
    extras: "Best for organizations",
  },
];

const specialOffers = [
  {
    title: "Early Bird Discount",
    description: "20% discount when you sign up within 7 days of platform launch.",
  },
  {
    title: "Free Trial",
    description: "14-day unlimited access trial for all new users.",
  },
];

const FAQData = [
  {
    question: "How do I access the courses?",
    answer: "After enrollment, you'll get immediate access to your course through our online learning platform. You can access it 24/7 from any device with an internet connection."
  },
  {
    question: "What's included in each course?",
    answer: "Each course includes video lessons, practical assignments, downloadable resources, lifetime access, and a certificate of completion. You'll also get access to our student community."
  },
  {
    question: "Are there any prerequisites?",
    answer: "Most courses are designed for all skill levels. Specific prerequisites, if any, are clearly listed in the course description."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied, just let us know within 30 days of enrollment for a full refund."
  }
];

const PricingSection = () => {
  return (
    <section className="glass-card" style={{
      padding: '3rem',
      marginTop: '4rem',
      marginBottom: '4rem',
      background: 'rgba(255, 0, 0, 0.1)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <h2 className="anti-title" style={{
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        CHOOSE YOUR LEARNING JOURNEY
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '3rem'
      }}>
        {pricingPlans.map((plan, index) => (
          <div key={index} className="glass-card" style={{
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <h3 style={{
              fontSize: '1.8rem',
              color: '#6366f1',
              marginBottom: '1rem'
            }}>{plan.title}</h3>
            <p style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#4b5563',
              marginBottom: '1rem'
            }}>${plan.price}</p>
            <p style={{
              color: '#6b7280',
              marginBottom: '2rem'
            }}>{plan.description}</p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              marginBottom: '2rem'
            }}>
              {plan.features.map((feature, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.8rem',
                  color: '#4b5563'
                }}>
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '20px', height: '20px', marginRight: '8px', color: '#22c55e' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4f46e5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6366f1';
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '4rem',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          color: '#6366f1',
          marginBottom: '2rem'
        }}>Special Offers</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {specialOffers.map((offer, index) => (
            <div key={index} className="glass-card" style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h4 style={{
                fontSize: '1.4rem',
                color: '#6366f1',
                marginBottom: '1rem'
              }}>{offer.title}</h4>
              <p style={{
                color: '#4b5563'
              }}>{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="glass-card" style={{
      padding: '3rem',
      marginTop: '4rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <h2 className="anti-title" style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {FAQData.map((faq, index) => (
          <div
            key={index}
            className="glass-card"
            style={{
              padding: '1.5rem',
              background: openIndex === index 
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)'
                : 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: openIndex === index ? '#6366f1' : '#4b5563',
                transition: 'color 0.3s ease'
              }}>
                {faq.question}
              </h3>
              {openIndex === index ? (
                <ChevronUpIcon className="h-6 w-6 text-indigo-600" />
              ) : (
                <ChevronDownIcon className="h-6 w-6 text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <p style={{
                marginTop: '1rem',
                color: '#4b5563',
                lineHeight: '1.6',
                fontSize: '1.1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(99, 102, 241, 0.1)'
              }}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />
      <div className="glass-container" style={{ 
        width: '100%', 
        minHeight: 'calc(100vh - 80px)',
        paddingTop: '80px'
      }}>
        <div style={{ 
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ 
            width: '100%',
            padding: '2rem 4rem'
          }}>
            <h1 className="anti-title" style={{ 
              fontSize: '3.5rem',
              marginBottom: '1.5rem',
              color: '#6366f1',
              textAlign: 'center'
            }}>
              BUSINESS & MARKETING COURSES
            </h1>
            <p className="anti-text" style={{ 
              fontSize: '1.25rem', 
              marginBottom: '3rem',
              textAlign: 'center',
              color: '#4b5563',
              margin: '0 auto',
              maxWidth: '900px'
            }}>
              Master essential business skills with our comprehensive courses. Learn at your own pace with expert instructors.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
              gap: '2rem',
              width: '100%',
              marginTop: '3rem'
            }}>
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="glass-card"
                  style={{ 
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '2rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div>
                    <h2 className="anti-subtitle" style={{ 
                      marginBottom: '1rem',
                      fontSize: '1.5rem',
                      color: '#6366f1',
                      lineHeight: '1.3'
                    }}>
                      {course.title}
                    </h2>
                    <div style={{ 
                      display: 'flex', 
                      gap: '1rem', 
                      marginBottom: '1rem', 
                      flexWrap: 'wrap'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem',
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderRadius: '8px',
                        color: '#6366f1'
                      }}>
                        <AcademicCapIcon className="h-5 w-5" />
                        <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                          {course.skillLevel}
                        </span>
                      </div>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem',
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderRadius: '8px',
                        color: '#6366f1'
                      }}>
                        <ClockIcon className="h-5 w-5" />
                        <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                          {course.duration}
                        </span>
                      </div>
                    </div>
                    <p className="anti-text" style={{ 
                      marginBottom: '1.5rem',
                      color: '#4b5563',
                      lineHeight: '1.6'
                    }}>
                      {course.headline}
                    </p>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(99, 102, 241, 0.1)'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      color: '#eab308'
                    }}>
                      <StarIcon className="h-5 w-5" />
                      <span style={{ fontWeight: '600' }}>
                        {course.stats.averageRating} ★
                      </span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem'
                    }}>
                      {course.price.isSpecial ? (
                        <>
                          <span style={{ 
                            textDecoration: 'line-through', 
                            color: '#9ca3af',
                            fontSize: '0.9rem'
                          }}>
                            {course.price.regular}
                          </span>
                          <span style={{ 
                            color: '#22c55e',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }}>
                            <CurrencyDollarIcon className="h-5 w-5" />
                            {course.price.special}
                          </span>
                        </>
                      ) : (
                        <span style={{ 
                          color: '#6366f1',
                          fontWeight: '600',
                          fontSize: '1.1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          <CurrencyDollarIcon className="h-5 w-5" />
                          {course.price.regular}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* TEST: Add console log here */}
          {console.log('Rendering PricingSection')}
          
          {/* Pricing Section */}
          <div style={{ 
            padding: '0 4rem',
            background: 'rgba(0, 255, 0, 0.1)' // Added green tint for testing
          }}>
            <PricingSection />
          </div>

          {/* FAQ section */}
          <div style={{ padding: '0 4rem' }}>
            <FAQ />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;