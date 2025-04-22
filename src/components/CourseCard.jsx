import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.thumbnail} alt={course.title} />
      </div>
      <div className="course-content">
        <h3>{course.title}</h3>
        <p className="course-description">{course.description}</p>
        <div className="course-meta">
          <span className="course-duration">{course.duration}</span>
          <span className="course-level">{course.level}</span>
        </div>
        <Link to={`/courses/${course.id}`} className="btn btn-primary">
          Start Learning
        </Link>
      </div>
    </div>
  );
};

export default CourseCard; 