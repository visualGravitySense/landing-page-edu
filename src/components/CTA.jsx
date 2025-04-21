import React, { useState } from 'react';
import './CTA.css';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this to your backend
    console.log('Email submitted:', email);
    
    // Show success message
    setSubmitStatus('Thank you!');
    
    setTimeout(() => {
      setSubmitStatus('');
      setEmail('');
    }, 3000);
  };

  return (
    <section className="cta-section">
      <div className="cta-content">
        <div className="cta-glass">
          <h2 className="cta-title">
            Elevate Learning,<br />
            Ignite Results
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Be among the first to experience how EduQuest transforms education through gamification 
            and interactive learning. Transform ordinary courses into extraordinary journeys.
          </p>
          <div className="max-w-md mx-auto relative">
            <form 
              id="signup-form-bottom" 
              className="flex flex-col md:flex-row gap-4" 
              onSubmit={handleSubmit}
            >
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                className="cta-input flex-grow px-6 py-4 rounded-xl text-lg focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit" 
                className="cta-button px-8 py-4 rounded-xl text-lg whitespace-nowrap"
              >
                Get Early Access
              </button>
            </form>
            {submitStatus && (
              <div className="success-message text-indigo-600 font-medium">
                {submitStatus}
              </div>
            )}
          </div>
          <p className="mt-6 text-white/60 text-sm text-center">
            Join educators worldwide who are revolutionizing engagement and retention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
