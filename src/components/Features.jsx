import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGamepad, 
  faTrophy, 
  faChartLine, 
  faUsers, 
  faBrain, 
  faEdit 
} from '@fortawesome/free-solid-svg-icons';

const Features = () => {
const features = [
  {
      icon: faGamepad,
      iconBgColor: 'bg-indigo-100',
      iconTextColor: 'text-indigo-600',
      title: 'Gamified Quizzes',
      description: 'Turn boring assessments into exciting challenges with points, streaks, and interactive elements that make learning addictive.'
    },
    {
      icon: faTrophy,
      iconBgColor: 'bg-purple-100',
      iconTextColor: 'text-purple-600',
      title: 'Achievement System',
      description: 'Earn badges and unlock achievements as you master new concepts, creating tangible progress markers on your learning journey.'
    },
    {
      icon: faChartLine,
      iconBgColor: 'bg-blue-100',
      iconTextColor: 'text-blue-600',
      title: 'Performance Analytics',
      description: 'Track your progress with detailed insights that highlight strengths and identify areas needing more attention.'
    },
    {
      icon: faUsers,
      iconBgColor: 'bg-green-100',
      iconTextColor: 'text-green-600',
      title: 'Competitive Learning',
      description: 'Climb leaderboards and challenge friends to friendly competition that motivates deeper engagement with material.'
    },
    {
      icon: faBrain,
      iconBgColor: 'bg-red-100',
      iconTextColor: 'text-red-600',
      title: 'Adaptive Learning',
      description: 'Experience personalized learning paths that adjust difficulty based on your performance and learning style.'
    },
    {
      icon: faEdit,
      iconBgColor: 'bg-yellow-100',
      iconTextColor: 'text-yellow-600',
      title: 'Easy Content Creation',
      description: 'For educators: Create engaging interactive content with our simple markdown editor and quiz templates.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Transform Your Learning Experience</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-white rounded-xl p-6 border border-gray-100 shadow-md transition duration-300">
              <div className={`w-14 h-14 rounded-full ${feature.iconBgColor} flex items-center justify-center mb-5`}>
                <FontAwesomeIcon icon={feature.icon} className={`text-2xl ${feature.iconTextColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
