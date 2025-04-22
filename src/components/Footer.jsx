import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faFacebook, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import './Features.css';

const Footer = () => {
  const companyLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'Contact', url: '#' }
  ];

  const resourceLinks = [
    { name: 'Blog', url: '#' },
    { name: 'Documentation', url: '#' },
    { name: 'Help Center', url: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Cookie Policy', url: '#' }
  ];

  const socialLinks = [
    { icon: faTwitter, url: '#', color: 'from-blue-400 to-blue-600' },
    { icon: faFacebook, url: '#', color: 'from-blue-600 to-blue-800' },
    { icon: faInstagram, url: '#', color: 'from-pink-500 to-purple-600' },
    { icon: faLinkedin, url: '#', color: 'from-blue-500 to-blue-700' }
  ];

  return (
    <footer className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gray-900/95"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Digo
            </h2>
            <p className="text-gray-400 max-w-sm">
              Transforming education through gamification, interactive learning, and AI-powered personalization.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="glass-card-dark p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card-dark p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card-dark p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="glass-card-dark rounded-2xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Digo. All rights reserved.</p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
                >
                  <FontAwesomeIcon icon={link.icon} className="text-white text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
