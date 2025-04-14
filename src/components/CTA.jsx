import React, { useState } from 'react';

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
    <section className="gradient-bg text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Learning Revolution</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Be among the first to experience how EduQuest transforms education through gamification and interactive learning.
        </p>
        <div className="max-w-md mx-auto">
          <form id="signup-form-bottom" className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-white text-indigo-700 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
            >
              {submitStatus || 'Get Early Access'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
