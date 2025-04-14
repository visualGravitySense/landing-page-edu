import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
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
    <header className="gradient-bg text-white">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:flex items-center">
        <div className="lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Learning Becomes an Adventure
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            The first educational platform that transforms classes into quests, knowledge into achievements, and learning into competition.
          </p>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-filter backdrop-blur-sm mb-10">
            <p className="font-medium mb-3">
              <FontAwesomeIcon icon={faRocket} className="mr-2" />
              Coming Soon! Be the first to know when we launch:
            </p>
            <form id="signup-form" className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-indigo-700 hover:bg-indigo-800 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {submitStatus || 'Get Early Access'}
              </button>
            </form>
            <p className="text-sm mt-3 opacity-80">We respect your privacy. No spam, ever.</p>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src="/api/placeholder/500/400" alt="Interactive Learning Platform" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
