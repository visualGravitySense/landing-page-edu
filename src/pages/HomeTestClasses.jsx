// import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import ForEducators from '../components/ForEducators';
import ForStudents from '../components/ForStudents';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import React from 'react';
import CourseCard from '../components/CourseCard';

const Home = () => {
  // Temporary mock data - will be replaced with Firebase data later
  const featuredCourses = [
    {
      id: 1,
      title: 'Business Card Design Masterclass',
      description: 'Learn to create professional business cards that make a lasting impression.',
      thumbnail: '/images/business-card-course.jpg',
      duration: '2 hours',
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Digital Marketing Fundamentals',
      description: 'Master the basics of digital marketing and grow your business online.',
      thumbnail: '/images/digital-marketing-course.jpg',
      duration: '4 hours',
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      description: 'Create a strong brand identity that resonates with your target audience.',
      thumbnail: '/images/branding-course.jpg',
      duration: '3 hours',
      level: 'Intermediate'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Master Business & Marketing Skills</h1>
          <p>Learn practical skills to grow your business and career</p>
          <button className="btn btn-primary">Explore Courses</button>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses">
        <div className="container">
          <h2>Featured Courses</h2>
          <div className="courses-grid">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of students who are already mastering business and marketing skills</p>
          <button className="btn btn-secondary">Sign Up Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;