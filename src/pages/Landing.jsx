import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import ForEducators from '../components/ForEducators';
import ForStudents from '../components/ForStudents';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import '../styles/shared.css';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />
      <div className="glass-container" style={{ width: '100%' }}>
        <HeroSection />
        <Features />
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '4rem',
          padding: '4rem 0'
        }}>
          <ForEducators />
          <ForStudents />
        </div>
        <CTA />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Landing; 