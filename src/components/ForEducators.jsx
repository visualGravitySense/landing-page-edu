import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const ForEducators = () => {
  const benefits = [
    'Intuitive content creator with no coding required',
    'Monitor student mastery through comprehensive dashboards',
    'Pinpoint struggling areas with intelligent gap analysis',
    'Drive motivation with customizable reward systems'
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/30 to-emerald-100/30 backdrop-blur-xl"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <div className="glass-card p-8 rounded-2xl backdrop-blur-md">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                For Educators
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Transform your teaching with powerful yet simple interactive assessment tools.
              </p>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start transform hover:scale-102 transition-transform">
                    <div className="flex-shrink-0 h-8 w-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mt-1 shadow-lg">
                      <FontAwesomeIcon icon={faCheck} className="text-white" />
                    </div>
                    <p className="ml-4 text-lg text-gray-700 anti-design-text">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-300/20 to-emerald-300/20 transform rotate-3 rounded-2xl"></div>
              <img 
                src="https://i.pinimg.com/736x/45/5e/39/455e39805fd6d82dc7377a641d7f8c72.jpg" 
                alt="For Educators" 
                className="w-96 h-96 object-cover rounded-2xl shadow-xl relative z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEducators; 