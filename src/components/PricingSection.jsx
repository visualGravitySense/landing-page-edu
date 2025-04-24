import React from 'react';

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

export const PricingSection = () => {
  return (
    <section className="glass-card" style={{
      padding: '3rem',
      marginTop: '4rem',
      marginBottom: '4rem',
      background: 'rgba(255, 255, 255, 0.1)',
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