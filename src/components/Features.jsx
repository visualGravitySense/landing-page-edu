import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBookOpen,
  faChartPie,
  faBriefcase,
  faBrain,
  faUsers,
  faGraduationCap,
  faGamepad,
  faCog,
  faChartLine,
  faTrophy,
  faPhotoVideo,
  faComments,
  faChalkboardTeacher,
  faStore,
  faPlug
} from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: faBookOpen,
      iconBgColor: 'from-amber-400 to-orange-500',
      title: 'Historical Context and Stories',
      description: 'Transform plain facts into captivating narratives with historical questions, founder stories, and pivotal moments that give learners the "why" behind the "what".'
    },
    {
      icon: faChartPie,
      iconBgColor: 'from-blue-400 to-indigo-500',
      title: 'Visual Elements',
      description: 'Convert abstract concepts into memorable visual challenges through chart analysis, logo recognition, and pattern identification activities.'
    },
    {
      icon: faBriefcase,
      iconBgColor: 'from-emerald-400 to-green-500',
      title: 'Real-world Applications',
      description: 'Bridge the gap between theory and practice with relevant examples of how knowledge manifests in businesses and problem-solving scenarios.'
    },
    {
      icon: faBrain,
      iconBgColor: 'from-purple-400 to-violet-500',
      title: 'Technical Concepts Made Approachable',
      description: 'Turn complex topics into exciting challenges with analogies, myth-busting questions, and tiered difficulty levels.'
    },
    {
      icon: faUsers,
      iconBgColor: 'from-pink-400 to-rose-500',
      title: 'Community Engagement',
      description: 'Harness the power of social learning through polls, competitive leaderboards, and daily challenges that transform solitary study.'
    },
    {
      icon: faGraduationCap,
      iconBgColor: 'from-cyan-400 to-teal-500',
      title: 'Educational Value',
      description: 'Elevate beyond testing to teaching with bite-sized explanations, focused thematic modules, and practical safety tips.'
    },
    {
      icon: faGamepad,
      iconBgColor: 'from-red-400 to-rose-500',
      title: 'Interactive Elements',
      description: 'Spark curiosity and critical thinking with prediction challenges, scenario-based questions, and multimedia components.'
    },
    {
      icon: faCog,
      iconBgColor: 'from-slate-400 to-gray-500',
      title: 'Platform Flexibility',
      description: 'Empower educators with customizable templates, intuitive builders, and diverse question formats that adapt to any subject matter.'
    },
    {
      icon: faChartLine,
      iconBgColor: 'from-lime-400 to-green-500',
      title: 'Enhanced Learning Elements',
      description: 'Revolutionize knowledge retention with intelligent spaced repetition, adaptive difficulty systems, and personalized progress tracking.'
    },
    {
      icon: faTrophy,
      iconBgColor: 'from-yellow-400 to-amber-500',
      title: 'Gamification Features',
      description: 'Transform study sessions into rewarding adventures with achievement badges, level progression, and timed challenges.'
    },
    {
      icon: faPhotoVideo,
      iconBgColor: 'from-fuchsia-400 to-purple-500',
      title: 'Rich Media Support',
      description: 'Bring lessons to life with audio samples, visual scenarios, and video demonstrations that engage multiple senses simultaneously.'
    },
    {
      icon: faComments,
      iconBgColor: 'from-sky-400 to-blue-500',
      title: 'Community and Social Features',
      description: 'Foster friendly competition and collaborative learning through class leaderboards and shareable achievements.'
    },
    {
      icon: faChalkboardTeacher,
      iconBgColor: 'from-indigo-400 to-violet-500',
      title: 'Instructor Tools',
      description: 'Empower teachers with insightful performance analytics, question effectiveness metrics, and streamlined content management.'
    },
    {
      icon: faStore,
      iconBgColor: 'from-emerald-400 to-teal-500',
      title: 'Business Model Options',
      description: 'Balance accessibility with sustainability through strategic freemium offerings and flexible subscription tiers.'
    },
    {
      icon: faPlug,
      iconBgColor: 'from-blue-400 to-indigo-500',
      title: 'Integration Capabilities',
      description: 'Eliminate technological barriers with seamless LMS integration, robust API access, and single sign-on functionality.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-indigo-50 opacity-50"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Transform Your Learning Experience
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Turn boring assessments into exciting challenges with points, streaks, and interactive elements that make learning addictive.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card hover:scale-102 transition-all duration-300 rounded-2xl p-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.iconBgColor} flex items-center justify-center mb-6 shadow-lg`}>
                <FontAwesomeIcon icon={feature.icon} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
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
