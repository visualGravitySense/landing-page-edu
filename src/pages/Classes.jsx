import { Link } from 'react-router-dom';
import '../styles/shared.css';
import Header from '../components/Header';

const Classes = () => {
  const classes = [
    {
      id: 1,
      title: 'BUSINESS FUNDAMENTALS',
      description: 'Master the essentials of business management and entrepreneurship.',
      image: 'https://via.placeholder.com/400x250',
      instructor: 'Dr. Sarah Johnson',
      duration: '8 weeks',
      courses: [
        {
          title: 'BUSINESS CARD DESIGN',
          lessons: [
            { type: 'video', title: 'Introduction to Design Basics', path: '/courses/1/lessons/1/video' },
            { type: 'text', title: 'Color Theory Fundamentals', path: '/courses/1/lessons/1/text' },
            { type: 'quiz', title: 'Test Your Knowledge', path: '/courses/1/lessons/2/quiz' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'DIGITAL MARKETING',
      description: 'Learn modern marketing strategies and digital promotion techniques.',
      image: 'https://via.placeholder.com/400x250',
      instructor: 'Prof. Michael Chen',
      duration: '10 weeks',
      courses: [
        {
          title: 'MARKETING ESSENTIALS',
          lessons: [
            { type: 'video', title: 'Marketing Fundamentals', path: '/courses/1/lessons/1/video' },
            { type: 'text', title: 'Brand Strategy Guide', path: '/courses/1/lessons/1/text' },
            { type: 'quiz', title: 'Marketing Quiz', path: '/courses/1/lessons/2/quiz' }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'BRAND DEVELOPMENT',
      description: 'Create and develop strong brand identities for businesses.',
      image: 'https://via.placeholder.com/400x250',
      instructor: 'Emma Thompson',
      duration: '6 weeks',
      courses: [
        {
          title: 'BRAND IDENTITY',
          lessons: [
            { type: 'video', title: 'Brand Identity Basics', path: '/courses/1/lessons/1/video' },
            { type: 'text', title: 'Logo Design Theory', path: '/courses/1/lessons/1/text' },
            { type: 'quiz', title: 'Branding Quiz', path: '/courses/1/lessons/2/quiz' }
          ]
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="glass-container">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="anti-title">AVAILABLE CLASSES</h1>
          <p className="anti-text" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Explore our comprehensive selection of business and marketing classes
          </p>

          <div className="glass-grid">
            {classes.map((classItem) => (
              <div key={classItem.id} className="glass-card">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}
                />
                <h2 className="anti-subtitle">{classItem.title}</h2>
                <p className="anti-text">{classItem.description}</p>
                
                <div className="glass-card" style={{ margin: '1rem 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <p className="anti-text" style={{ margin: 0 }}>
                      <strong>Instructor:</strong> {classItem.instructor}
                    </p>
                    <p className="anti-text" style={{ margin: 0 }}>
                      <strong>Duration:</strong> {classItem.duration}
                    </p>
                  </div>
                </div>

                {classItem.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="glass-card" style={{ margin: '1rem 0' }}>
                    <h3 className="anti-subtitle" style={{ fontSize: '1.1rem' }}>{course.title}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {course.lessons.map((lesson, lessonIndex) => (
                        <Link
                          key={lessonIndex}
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
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes; 