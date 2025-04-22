import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import QuizApp from './QuizApp';
import { QuizProvider } from '../context/QuizContext';
import './CTA.css';

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
    <header className="gradient-bg text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="max-w-2xl mt-16 lg:mt-24">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
              Turn Knowledge<br />
              Into Conquest
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed text-center sm:text-left">
              The revolutionary platform where educators create captivating challenges, 
              students collect victories, and learning feels like the adventure it was 
              always meant to be.
            </p>
            <div className="glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faRocket} className="text-pink-400 text-xl" />
                <p className="font-medium text-white/90">
                  Coming Soon! Be the first to know when we launch:
                </p>
              </div>
              <form id="signup-form" className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  required 
                  className="cta-input flex-grow px-5 py-3.5 rounded-xl text-base sm:text-lg focus:outline-none w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit" 
                  className="cta-button px-6 py-3.5 rounded-xl text-base sm:text-lg font-medium whitespace-nowrap w-full sm:w-auto"
                >
                  {submitStatus || 'Get Early Access'}
                </button>
              </form>
              <p className="text-sm mt-4 text-white/70">We respect your privacy. No spam, ever.</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
