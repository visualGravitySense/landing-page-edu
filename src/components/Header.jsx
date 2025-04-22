import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const headerOffset = 80; // Height of fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-lg"></div>
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Digo
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="nav-link text-gray-600 hover:text-indigo-600 transition-all">Features</a>
              <a href="#for-educators" onClick={(e) => handleNavClick(e, 'for-educators')} className="nav-link text-gray-600 hover:text-indigo-600 transition-all">For Educators</a>
              <a href="#for-students" onClick={(e) => handleNavClick(e, 'for-students')} className="nav-link text-gray-600 hover:text-indigo-600 transition-all">For Students</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="nav-link text-gray-600 hover:text-indigo-600 transition-all">FAQ</a>
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a 
              href="#cta" 
              onClick={(e) => handleNavClick(e, 'cta')}
              style={{ background: 'linear-gradient(135deg, #FF3366 0%, #FF6B3D 100%)' }}
              className="glass-button px-6 py-2.5 rounded-xl text-white font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Early Access
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none transition-colors"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="glass-card rounded-2xl p-4 space-y-4">
              <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="block text-gray-600 hover:text-indigo-600 transition-colors text-center">Features</a>
              <a href="#for-educators" onClick={(e) => handleNavClick(e, 'for-educators')} className="block text-gray-600 hover:text-indigo-600 transition-colors text-center">For Educators</a>
              <a href="#for-students" onClick={(e) => handleNavClick(e, 'for-students')} className="block text-gray-600 hover:text-indigo-600 transition-colors text-center">For Students</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="block text-gray-600 hover:text-indigo-600 transition-colors text-center">FAQ</a>
              <a 
                href="#cta" 
                onClick={(e) => handleNavClick(e, 'cta')}
                style={{ background: 'linear-gradient(135deg, #FF3366 0%, #FF6B3D 100%)' }}
                className="block px-6 py-2.5 text-white rounded-xl text-center font-medium hover:shadow-lg transition-all duration-200"
              >
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