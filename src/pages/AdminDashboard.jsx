import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/shared.css';
import Header from '../components/Header';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - will be replaced with Firebase data
  const dashboardData = {
    overview: {
      totalStudents: 1247,
      activeUsers: 856,
      totalCourses: 24,
      completionRate: 78
    },
    recentActivity: [
      { id: 1, user: 'ALEX SMITH', action: 'COMPLETED COURSE', course: 'BUSINESS CARD DESIGN', time: '2 hours ago' },
      { id: 2, user: 'MARIA GARCIA', action: 'STARTED COURSE', course: 'MARKETING BASICS', time: '3 hours ago' },
      { id: 3, user: 'JOHN DOE', action: 'SUBMITTED QUIZ', course: 'COLOR THEORY', time: '5 hours ago' }
    ],
    courses: [
      { id: 1, title: 'BUSINESS CARD DESIGN', students: 234, progress: 85 },
      { id: 2, title: 'MARKETING BASICS', students: 189, progress: 72 },
      { id: 3, title: 'COLOR THEORY', students: 156, progress: 93 }
    ]
  };

  const renderOverview = () => (
    <div className="glass-grid">
      <div className="glass-card">
        <h3 className="anti-subtitle">TOTAL STUDENTS</h3>
        <p className="anti-title" style={{ fontSize: '2.5rem', marginBottom: 0 }}>{dashboardData.overview.totalStudents}</p>
      </div>
      <div className="glass-card">
        <h3 className="anti-subtitle">ACTIVE USERS</h3>
        <p className="anti-title" style={{ fontSize: '2.5rem', marginBottom: 0 }}>{dashboardData.overview.activeUsers}</p>
      </div>
      <div className="glass-card">
        <h3 className="anti-subtitle">TOTAL COURSES</h3>
        <p className="anti-title" style={{ fontSize: '2.5rem', marginBottom: 0 }}>{dashboardData.overview.totalCourses}</p>
      </div>
      <div className="glass-card">
        <h3 className="anti-subtitle">COMPLETION RATE</h3>
        <p className="anti-title" style={{ fontSize: '2.5rem', marginBottom: 0 }}>{dashboardData.overview.completionRate}%</p>
      </div>
    </div>
  );

  const renderActivity = () => (
    <div className="glass-card">
      <h2 className="anti-subtitle">RECENT ACTIVITY</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {dashboardData.recentActivity.map((activity) => (
          <div key={activity.id} className="glass-card" style={{ margin: '0.5rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 className="anti-text" style={{ margin: 0, fontWeight: 'bold' }}>{activity.user}</h4>
                <p className="anti-text" style={{ margin: '0.5rem 0' }}>
                  {activity.action} - {activity.course}
                </p>
              </div>
              <span className="anti-text" style={{ opacity: 0.7 }}>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="glass-card">
      <h2 className="anti-subtitle">COURSE STATISTICS</h2>
      {dashboardData.courses.map((course) => (
        <div key={course.id} className="glass-card" style={{ margin: '1rem 0' }}>
          <h3 className="anti-text" style={{ marginBottom: '1rem' }}>{course.title}</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="anti-text">{course.students} STUDENTS</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, marginLeft: '2rem' }}>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <span className="anti-text" style={{ minWidth: '4rem' }}>{course.progress}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Header />
      <div className="glass-container">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="anti-title">ADMIN DASHBOARD</h1>
          
          <div className="glass-card" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button
              className={`glass-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              OVERVIEW
            </button>
            <button
              className={`glass-button ${activeTab === 'activity' ? 'active' : ''}`}
              onClick={() => setActiveTab('activity')}
            >
              ACTIVITY
            </button>
            <button
              className={`glass-button ${activeTab === 'courses' ? 'active' : ''}`}
              onClick={() => setActiveTab('courses')}
            >
              COURSES
            </button>
          </div>

          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'activity' && renderActivity()}
          {activeTab === 'courses' && renderCourses()}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard; 