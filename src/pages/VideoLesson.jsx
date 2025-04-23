import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../styles/shared.css';
import Header from '../components/Header';

const VideoLesson = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock data - will be replaced with Firebase data
  const lesson = {
    title: 'INTRODUCTION TO BUSINESS CARD DESIGN',
    videoUrl: 'https://example.com/video.mp4',
    description: 'Learn the fundamentals of creating professional business cards that make a lasting impression. In this lesson, we\'ll cover the essential elements of business card design, including layout, typography, and color theory.',
    duration: '15:30',
    instructor: 'Dr. Sarah Johnson',
    relatedLessons: [
      { type: 'text', title: 'Color Theory Fundamentals', path: '/courses/1/lessons/1/text' },
      { type: 'quiz', title: 'Test Your Knowledge', path: '/courses/1/lessons/2/quiz' }
    ],
    resources: [
      { name: 'DESIGN TEMPLATE', url: '#' },
      { name: 'COLOR PALETTE GUIDE', url: '#' },
      { name: 'TYPOGRAPHY TIPS', url: '#' }
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
                  <strong>Duration:</strong> {lesson.duration}
                </p>
              </div>
              <div className="glass-card" style={{ margin: 0, padding: '0.5rem 1rem' }}>
                <p className="anti-text" style={{ margin: 0 }}>
                  <strong>Instructor:</strong> {lesson.instructor}
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1rem' }}>
              <video
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                style={{ 
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(31, 38, 135, 0.15)'
                }}
              >
                <source src={lesson.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="glass-card" style={{ marginTop: '2rem' }}>
              <h2 className="anti-subtitle">ABOUT THIS LESSON</h2>
              <p className="anti-text">{lesson.description}</p>
            </div>

            <div className="glass-grid" style={{ marginTop: '2rem' }}>
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

export default VideoLesson; 