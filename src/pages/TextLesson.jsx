import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../styles/shared.css';
import Header from '../components/Header';

const TextLesson = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

  // Mock data - will be replaced with Firebase data
  const lesson = {
    title: 'COLOR THEORY FUNDAMENTALS',
    content: `
      Understanding color theory is crucial for creating effective business cards. This lesson covers:

      1. Color Psychology in Business
      - How different colors evoke specific emotions
      - Cultural significance of colors in business
      - Creating trust and professionalism through color

      2. Color Schemes and Harmonies
      - Complementary colors
      - Analogous color schemes
      - Monochromatic designs
      - Creating balance and contrast

      3. Practical Applications
      - Selecting primary and secondary colors
      - Background and text color relationships
      - Color accessibility considerations
      - Digital vs. print color considerations
    `,
    readingTime: '10 minutes',
    instructor: 'Dr. Sarah Johnson',
    relatedLessons: [
      { type: 'video', title: 'Introduction to Design Basics', path: '/courses/1/lessons/1/video' },
      { type: 'quiz', title: 'Test Your Knowledge', path: '/courses/1/lessons/2/quiz' }
    ],
    resources: [
      { name: 'COLOR WHEEL PDF', url: '#' },
      { name: 'PSYCHOLOGY OF COLOR', url: '#' },
      { name: 'ACCESSIBILITY GUIDE', url: '#' }
    ]
  };

  const handleNextLesson = () => {
    navigate(`/courses/${courseId}/lessons/${parseInt(lessonId) + 1}/quiz`);
  };

  return (
    <>
      <Header />
      <div className="glass-container">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="glass-card">
            <h1 className="anti-title">{lesson.title}</h1>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="glass-card" style={{ margin: 0, padding: '0.5rem 1rem' }}>
                <p className="anti-text" style={{ margin: 0 }}>
                  <strong>Reading Time:</strong> {lesson.readingTime}
                </p>
              </div>
              <div className="glass-card" style={{ margin: 0, padding: '0.5rem 1rem' }}>
                <p className="anti-text" style={{ margin: 0 }}>
                  <strong>Instructor:</strong> {lesson.instructor}
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ marginBottom: '2rem' }}>
              <div className="anti-text" style={{ 
                whiteSpace: 'pre-wrap',
                lineHeight: '1.6',
                fontSize: '1.1rem'
              }}>
                {lesson.content}
              </div>
            </div>

            <div className="glass-grid">
              <div className="glass-card">
                <h3 className="anti-subtitle">RELATED LESSONS</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {lesson.relatedLessons.map((relatedLesson, index) => (
                    <Link
                      key={index}
                      to={relatedLesson.path}
                      className="glass-button"
                      style={{ textDecoration: 'none', textAlign: 'center' }}
                    >
                      {relatedLesson.title}
                      <span style={{ 
                        marginLeft: '0.5rem',
                        padding: '0.2rem 0.5rem',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '4px',
                        fontSize: '0.8rem'
                      }}>
                        {relatedLesson.type.toUpperCase()}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="glass-card">
                <h3 className="anti-subtitle">RESOURCES</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {lesson.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button"
                      style={{ textDecoration: 'none', textAlign: 'center' }}
                    >
                      {resource.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
              <Link
                to={`/courses/${courseId}/lessons/${parseInt(lessonId) - 1}/video`}
                className="glass-button"
                style={{ textDecoration: 'none' }}
              >
                PREVIOUS LESSON
              </Link>
              <button className="glass-button" onClick={handleNextLesson}>
                TAKE QUIZ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextLesson; 