import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    resources: [
      { name: 'DESIGN TEMPLATE', url: '#' },
      { name: 'COLOR PALETTE GUIDE', url: '#' },
      { name: 'TYPOGRAPHY TIPS', url: '#' }
    ],
    nextLesson: {
      type: 'quiz',
      id: parseInt(lessonId) + 1
    }
  };

  const handleNextLesson = () => {
    navigate(`/courses/${courseId}/lessons/${lesson.nextLesson.id}/${lesson.nextLesson.type}`);
  };

  return (
    <div className="glass-container">
      <div className="glass-card">
        <h1 className="anti-title">{lesson.title}</h1>
        <p className="anti-subtitle">Duration: {lesson.duration}</p>

        <div className="video-player glass-card" style={{ padding: '1rem' }}>
          <video
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            style={{ width: '100%', borderRadius: '15px' }}
          >
            <source src={lesson.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="glass-card">
          <h2 className="anti-subtitle">ABOUT THIS LESSON</h2>
          <p className="anti-text">{lesson.description}</p>
        </div>

        <div className="glass-card">
          <h3 className="anti-subtitle">RESOURCES</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {lesson.resources.map((resource, index) => (
              <li key={index} style={{ marginBottom: '1rem' }}>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button"
                  style={{ display: 'inline-block' }}
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button className="glass-button">Previous Lesson</button>
          <button className="glass-button" onClick={handleNextLesson}>
            Take Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoLesson; 