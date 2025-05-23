import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/home.css';
import './styles/lessons.css';
import './styles/admin.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import VideoLesson from './pages/VideoLesson';
import TextLesson from './pages/TextLesson';
import Quiz from './pages/Quiz';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import Course from './pages/Course';

function App() {
  return (
    <Router basename="/landing-page-edu">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Home />} />
        <Route path="/courses/:courseId" element={<Course />} />
        <Route path="/courses/:courseId/lessons/:lessonId/video" element={<VideoLesson />} />
        <Route path="/courses/:courseId/lessons/:lessonId/text" element={<TextLesson />} />
        <Route path="/courses/:courseId/lessons/:lessonId/quiz" element={<Quiz />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
