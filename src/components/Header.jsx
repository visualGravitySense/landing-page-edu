import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-indigo-700">EduQuest</a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-700 transition-colors">Features</a>
            <a href="#for-educators" className="text-gray-700 hover:text-indigo-700 transition-colors">For Educators</a>
            <a href="#for-students" className="text-gray-700 hover:text-indigo-700 transition-colors">For Students</a>
            <a href="#faq" className="text-gray-700 hover:text-indigo-700 transition-colors">FAQ</a>
            <a href="#cta" className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition-colors">
              Get Early Access
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-indigo-700 transition-colors">Features</a>
              <a href="#for-educators" className="text-gray-700 hover:text-indigo-700 transition-colors">For Educators</a>
              <a href="#for-students" className="text-gray-700 hover:text-indigo-700 transition-colors">For Students</a>
              <a href="#faq" className="text-gray-700 hover:text-indigo-700 transition-colors">FAQ</a>
              <a href="#cta" className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition-colors text-center">
                Get Early Access
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;