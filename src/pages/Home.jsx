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
import { Link } from 'react-router-dom';
import '../styles/shared.css';
import { courses } from '../data/courses';
import {
  AcademicCapIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <>
      <Header />
      <div className="glass-container">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="glass-card">
            <h1 className="anti-title">BUSINESS & MARKETING COURSES</h1>
            <p className="anti-text" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Master essential business skills with our comprehensive courses. Learn at your own pace with expert instructors.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
              gap: '2rem',
              marginTop: '2rem'
            }}>
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="glass-card"
                  style={{ 
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'none';
                  }}
                >
                  <h2 className="anti-subtitle" style={{ marginBottom: '1rem' }}>
                    {course.title}
                  </h2>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      padding: '0.5rem',
                      background: 'rgba(99, 102, 241, 0.2)',
                      borderRadius: '4px'
                    }}>
                      <AcademicCapIcon className="h-5 w-5 text-indigo-500" />
                      <span style={{ fontSize: '0.9rem' }}>{course.skillLevel}</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      padding: '0.5rem',
                      background: 'rgba(99, 102, 241, 0.2)',
                      borderRadius: '4px'
                    }}>
                      <ClockIcon className="h-5 w-5 text-indigo-500" />
                      <span style={{ fontSize: '0.9rem' }}>{course.duration}</span>
                    </div>
                  </div>
                  <p className="anti-text" style={{ marginBottom: '1rem' }}>
                    {course.headline}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginTop: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <StarIcon className="h-5 w-5 text-yellow-500" />
                      <span>{course.stats.averageRating} ★</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      color: course.price.isSpecial ? '#22c55e' : 'inherit'
                    }}>
                      {course.price.isSpecial ? (
                        <>
                          <span style={{ textDecoration: 'line-through', color: '#6b7280' }}>
                            {course.price.regular}
                          </span>
                          <CurrencyDollarIcon className="h-5 w-5" />
                          <span style={{ fontWeight: 'bold' }}>{course.price.special}</span>
                        </>
                      ) : (
                        <>
                          <CurrencyDollarIcon className="h-5 w-5" />
                          <span>{course.price.regular}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;