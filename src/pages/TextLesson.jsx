import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/glassmorphism.css';

const TextLesson = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

  // Mock data - will be replaced with Firebase data
  const lesson = {
    title: 'UNDERSTANDING COLOR THEORY',
    sections: [
      {
        title: 'INTRODUCTION TO COLOR THEORY',
        content: 'Color theory is a fundamental aspect of design that helps create visually appealing and effective designs. Understanding how colors work together is crucial for creating professional business cards.'
      },
      {
        title: 'PRIMARY COLORS',
        content: 'The primary colors are red, blue, and yellow. These colors cannot be created by mixing other colors. They form the foundation of the color wheel and are essential for creating all other colors.'
      },
      {
        title: 'COLOR HARMONY',
        content: 'Color harmony refers to the arrangement of colors in a way that is pleasing to the eye.',
        list: [
          'Complementary colors (opposite on the color wheel)',
          'Analogous colors (next to each other on the color wheel)',
          'Triadic colors (three colors evenly spaced on the color wheel)'
        ]
      },
      {
        title: 'PRACTICAL APPLICATIONS',
        content: 'Understanding color theory helps in creating effective business cards, logos, and marketing materials. Consider these tips:',
        list: [
          'Use complementary colors for contrast and emphasis',
          'Choose analogous colors for a harmonious look',
          'Consider color psychology when selecting your palette'
        ]
      }
    ],
    resources: [
      { name: 'COLOR WHEEL GUIDE', url: '#' },
      { name: 'COLOR PSYCHOLOGY CHART', url: '#' }
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
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="anti-title">{lesson.title}</h1>

        {lesson.sections.map((section, index) => (
          <div key={index} className="glass-card" style={{ marginBottom: '2rem' }}>
            <h2 className="anti-subtitle">{section.title}</h2>
            <p className="anti-text">{section.content}</p>
            {section.list && (
              <ul className="anti-text" style={{ listStyle: 'none', padding: 0 }}>
                {section.list.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    • {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="glass-card">
          <h3 className="anti-subtitle">ADDITIONAL RESOURCES</h3>
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

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}>
          <button className="glass-button">Previous Lesson</button>
          <button className="glass-button" onClick={handleNextLesson}>
            Take Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextLesson; 