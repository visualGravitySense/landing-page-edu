import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faFacebook, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

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
    { icon: faTwitter, url: '#' },
    { icon: faFacebook, url: '#' },
    { icon: faInstagram, url: '#' },
    { icon: faLinkedin, url: '#' }
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">EduQuest</h2>
            <p className="text-gray-400 max-w-sm">
              Transforming education through gamification, interactive learning, and AI-powered personalization.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 EduQuest. All rights reserved.</p>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={link.icon} className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
