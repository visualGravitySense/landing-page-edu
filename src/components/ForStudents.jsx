import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ForStudents = () => {
  const benefits = [
    'Earn points and badges as you master concepts',
    'Compete with peers on class leaderboards',
    'Track your progress with visual analytics',
    'Learn at your own pace with adaptive difficulty'
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="lg:flex items-center flex-row-reverse">
          <div className="lg:w-1/2 lg:pl-10 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">For Students</h2>
            <p className="text-xl text-gray-700 mb-6">
              Learn more effectively through interactive challenges that make studying enjoyable.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center mt-1">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src="/api/placeholder/450/350" alt="For Students" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForStudents; 