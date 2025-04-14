import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ForEducators = () => {
  const benefits = [
    'Simple markdown editor for content creation',
    'Track student progress with detailed analytics',
    'Identify knowledge gaps through performance data',
    'Boost engagement through gamification elements'
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">For Educators</h2>
            <p className="text-xl text-gray-700 mb-6">
              Create engaging interactive learning experiences without technical expertise.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src="/api/placeholder/450/350" alt="For Educators" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEducators; 