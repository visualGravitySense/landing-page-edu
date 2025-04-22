import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/shared.css';
import Header from '../components/Header';

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('profile');

  // Mock data - will be replaced with Firebase data
  const userData = {
    profile: {
      name: 'ALEX RODRIGUEZ',
      role: 'STUDENT',
      email: 'alex.r@example.com',
      joinDate: 'JANUARY 2024',
      bio: 'Passionate about design and marketing. Currently exploring the world of business card design and brand identity.',
      avatar: 'https://via.placeholder.com/150'
    },
    progress: {
      coursesCompleted: 5,
      coursesInProgress: 2,
      averageScore: 92,
      totalHours: 45
    },
    achievements: [
      { id: 1, title: 'FAST LEARNER', description: 'Completed 5 courses in 30 days', icon: '🚀' },
      { id: 2, title: 'PERFECT SCORE', description: 'Achieved 100% in Color Theory Quiz', icon: '🎯' },
      { id: 3, title: 'CONSISTENT', description: 'Logged in for 30 consecutive days', icon: '🔥' }
    ],
    currentCourses: [
      { 
        id: 1, 
        title: 'BUSINESS CARD DESIGN', 
        progress: 75,
        lessons: [
          { type: 'video', title: 'Introduction to Design Basics', path: '/courses/1/lessons/1/video' },
          { type: 'text', title: 'Color Theory Fundamentals', path: '/courses/1/lessons/1/text' },
          { type: 'quiz', title: 'Test Your Knowledge', path: '/courses/1/lessons/2/quiz' }
        ]
      },
      { 
        id: 2, 
        title: 'MARKETING BASICS', 
        progress: 45,
        lessons: [
          { type: 'video', title: 'Marketing Fundamentals', path: '/courses/1/lessons/1/video' },
          { type: 'text', title: 'Brand Strategy Guide', path: '/courses/1/lessons/1/text' },
          { type: 'quiz', title: 'Marketing Quiz', path: '/courses/1/lessons/2/quiz' }
        ]
      }
    ]
  };

  const renderProfile = () => (
    <div className="glass-card">
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div className="glass-card" style={{ flex: '0 0 auto', padding: '1rem', margin: 0 }}>
          <img
            src={userData.profile.avatar}
            alt="Profile"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '12px',
              border: '2px solid rgba(99, 102, 241, 0.2)'
            }}
          />
        </div>
        <div style={{ flex: '1 1 300px' }}>
          <h2 className="anti-title" style={{ marginBottom: '0.5rem' }}>{userData.profile.name}</h2>
          <p className="anti-subtitle" style={{ marginBottom: '1rem' }}>{userData.profile.role}</p>
          <p className="anti-text">{userData.profile.bio}</p>
          <div className="glass-card" style={{ margin: '1rem 0' }}>
            <p className="anti-text" style={{ margin: '0.5rem 0' }}>EMAIL: {userData.profile.email}</p>
            <p className="anti-text" style={{ margin: '0.5rem 0' }}>JOINED: {userData.profile.joinDate}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProgress = () => (
    <div>
      <div className="glass-grid">
        <div className="glass-card">
          <h3 className="anti-subtitle">COMPLETED COURSES</h3>
          <p className="anti-title" style={{ fontSize: '2.5rem', marginBottom: 0 }}>{userData.progress.coursesCompleted}</p>
        </div>
        <div className="glass-card">
          <h3 className="anti-subtitle">IN PROGRESS</h3>
          <p className="anti-title" style={{ fontSize: '2.5rem', marginBottom: 0 }}>{userData.progress.coursesInProgress}</p>
        </div>
        <div className="glass-card">
          <h3 className="anti-subtitle">AVERAGE SCORE</h3>
          <p className="anti-title" style={{ fontSize: '2.5rem', marginBottom: 0 }}>{userData.progress.averageScore}%</p>
        </div>
        <div className="glass-card">
          <h3 className="anti-subtitle">TOTAL HOURS</h3>
          <p className="anti-title" style={{ fontSize: '2.5rem', marginBottom: 0 }}>{userData.progress.totalHours}h</p>
        </div>
      </div>

      <div className="glass-card" style={{ marginTop: '2rem' }}>
        <h3 className="anti-subtitle">CURRENT COURSES</h3>
        {userData.currentCourses.map(course => (
          <div key={course.id} className="glass-card" style={{ margin: '1rem 0' }}>
            <h4 className="anti-text" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>{course.title}</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <span className="anti-text" style={{ minWidth: '4rem' }}>{course.progress}%</span>
            </div>
            <div className="glass-card" style={{ margin: '1rem 0' }}>
              <h5 className="anti-subtitle" style={{ fontSize: '1rem' }}>AVAILABLE LESSONS</h5>
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
  );

  const renderAchievements = () => (
    <div className="glass-grid">
      {userData.achievements.map(achievement => (
        <div key={achievement.id} className="glass-card">
          <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>{achievement.icon}</div>
          <h3 className="anti-subtitle" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>{achievement.title}</h3>
          <p className="anti-text" style={{ textAlign: 'center' }}>{achievement.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Header />
      <div className="glass-container">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 className="anti-title">MY PROFILE</h1>
          
          <div className="glass-card" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button
              className={`glass-button ${activeSection === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveSection('profile')}
            >
              PROFILE
            </button>
            <button
              className={`glass-button ${activeSection === 'progress' ? 'active' : ''}`}
              onClick={() => setActiveSection('progress')}
            >
              PROGRESS
            </button>
            <button
              className={`glass-button ${activeSection === 'achievements' ? 'active' : ''}`}
              onClick={() => setActiveSection('achievements')}
            >
              ACHIEVEMENTS
            </button>
          </div>

          {activeSection === 'profile' && renderProfile()}
          {activeSection === 'progress' && renderProgress()}
          {activeSection === 'achievements' && renderAchievements()}
        </div>
      </div>
    </>
  );
};

export default UserProfile; 