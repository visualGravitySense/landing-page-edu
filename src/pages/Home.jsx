// import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HeroSectionClasses from '../components/HeroSectionClasses';
import Features from '../components/Features';
import ForEducators from '../components/ForEducators';
import ForStudents from '../components/ForStudents';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/shared.css';

const Home = () => {
  const courses = [
    {
      id: 1,
      title: 'BUSINESS CARD DESIGN',
      description: 'Learn the fundamentals of creating professional business cards that make a lasting impression.',
      image: 'https://via.placeholder.com/400x250',
      lessons: [
        { type: 'video', title: 'Introduction to Design Basics', path: '/courses/1/lessons/1/video' },
        { type: 'text', title: 'Color Theory Fundamentals', path: '/courses/1/lessons/1/text' },
        { type: 'quiz', title: 'Test Your Knowledge', path: '/courses/1/lessons/2/quiz' }
      ]
    },
    {
      id: 2,
      title: 'MARKETING ESSENTIALS',
      description: 'Master the core concepts of digital marketing and brand promotion strategies.',
      image: 'https://via.placeholder.com/400x250',
      lessons: [
        { type: 'video', title: 'Marketing Fundamentals', path: '/courses/1/lessons/1/video' },
        { type: 'text', title: 'Brand Strategy Guide', path: '/courses/1/lessons/1/text' },
        { type: 'quiz', title: 'Marketing Quiz', path: '/courses/1/lessons/2/quiz' }
      ]
    },
    {
      id: 3,
      title: 'BRAND IDENTITY',
      description: 'Create compelling brand identities that resonate with your target audience.',
      image: 'https://via.placeholder.com/400x250',
      lessons: [
        { type: 'video', title: 'Brand Identity Basics', path: '/courses/1/lessons/1/video' },
        { type: 'text', title: 'Logo Design Theory', path: '/courses/1/lessons/1/text' },
        { type: 'quiz', title: 'Branding Quiz', path: '/courses/1/lessons/2/quiz' }
      ]
    }
  ];

  return (
    <>
      <Header />

      <HeroSectionClasses />

      {/* Featured Courses Section */}
      <section className="featured-courses">
        <div className="container">
          <h2>Featured Courses</h2>
          <div className="glass-grid">
            {courses.map((course) => (
              <div key={course.id} className="glass-card">
                <img
                  src={course.image}
                  alt={course.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}
                />
                <h2 className="anti-subtitle">{course.title}</h2>
                <p className="anti-text">{course.description}</p>
                
                <div className="glass-card" style={{ margin: '1rem 0' }}>
                  <h3 className="anti-subtitle" style={{ fontSize: '1.1rem' }}>AVAILABLE LESSONS</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {course.lessons.map((lesson, index) => (
                      <Link
                        key={index}
                        to={lesson.path}
                        className="glass-button"
                        style={{ textDecoration: 'none', textAlign: 'center' }}
                      >
                        {lesson.title}
                        <span style={{ 
                          marginLeft: '0.5rem',
                          padding: '0.2rem 0.5rem',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '4px',
                          fontSize: '0.8rem'
                        }}>
                          {lesson.type.toUpperCase()}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      <HeroSection />
      
      <Features />
      <div id="for-educators">
        <ForEducators />
      </div>
      <div id="for-students">
        <ForStudents />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default Home;