import { useParams, Link } from 'react-router-dom';
import '../styles/shared.css';
import Header from '../components/Header';
import { courses } from '../data/courses';
import {
  AcademicCapIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  BookOpenIcon,
  UserGroupIcon,
  StarIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  GiftIcon,
  HeartIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';

const Course = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="glass-container">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="glass-card">
            <h1 className="anti-title">COURSE NOT FOUND</h1>
            <p className="anti-text">The course you're looking for doesn't exist.</p>
            <Link to="/" className="glass-button">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="glass-container">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="glass-card">
            <h1 className="anti-title">{course.title}</h1>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div className="glass-card" style={{ 
                margin: 0, 
                padding: '0.5rem 1rem', 
                background: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <AcademicCapIcon className="h-5 w-5 text-indigo-500" />
                <p className="anti-text" style={{ margin: 0 }}>
                  <strong>Level:</strong> {course.skillLevel}
                </p>
              </div>
              <div className="glass-card" style={{ 
                margin: 0, 
                padding: '0.5rem 1rem', 
                background: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <ClockIcon className="h-5 w-5 text-indigo-500" />
                <p className="anti-text" style={{ margin: 0 }}>
                  <strong>Duration:</strong> {course.duration}
                </p>
              </div>
              <div className="glass-card" style={{ 
                margin: 0, 
                padding: '0.5rem 1rem', 
                background: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CurrencyDollarIcon className="h-5 w-5 text-green-500" />
                <p className="anti-text" style={{ margin: 0 }}>
                  <strong>Price:</strong> {course.price.isSpecial ? (
                    <span style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>
                      {course.price.regular}
                    </span>
                  ) : null}
                  <span style={{ color: '#22c55e', fontWeight: 'bold' }}>
                    {course.price.isSpecial ? course.price.special : course.price.regular}
                  </span>
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ marginBottom: '2rem', background: 'none' }}>
              <h2 className="anti-subtitle">COURSE OVERVIEW</h2>
              <p className="anti-text" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                {course.headline}
              </p>
              <p className="anti-text" style={{ marginBottom: '1.5rem' }}>
                {course.problemStatement}
              </p>
              
              <h3 className="anti-subtitle" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircleIcon className="h-6 w-6 text-indigo-500" />
                WHAT YOU&apos;LL LEARN
              </h3>
              <ul className="anti-text" style={{ listStyle: 'none', padding: 0 }}>
                {course.benefits.map((benefit, index) => (
                  <li key={index} style={{ 
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-grid" style={{ marginBottom: '2rem' }}>
              <div className="glass-card" style={{ background: 'none' }}>
                <h3 className="anti-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpenIcon className="h-6 w-6 text-indigo-500" />
                  TECHNICAL DETAILS
                </h3>
                <div className="anti-text">
                  <p><strong>Tools Required:</strong></p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {course.toolsRequired.map((tool, index) => (
                      <li key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <p><strong>Prerequisites:</strong></p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                  <p><strong>You&apos;ll Receive:</strong></p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {course.deliverables.map((item, index) => (
                      <li key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="glass-card" style={{ background: 'none' }}>
                <h3 className="anti-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <UserGroupIcon className="h-6 w-6 text-indigo-500" />
                  INSTRUCTOR
                </h3>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <img 
                    src={course.instructor.image} 
                    alt={course.instructor.name}
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid rgba(99, 102, 241, 0.5)'
                    }}
                  />
                  <div>
                    <p className="anti-text" style={{ margin: 0 }}>
                      <strong>{course.instructor.name}</strong>
                    </p>
                    <p className="anti-text" style={{ margin: 0 }}>
                      {course.instructor.credentials}
                    </p>
                  </div>
                </div>
                <p className="anti-text">{course.instructor.bio}</p>
              </div>
            </div>

            <div className="glass-card" style={{ marginBottom: '2rem', background: 'none' }}>
              <h3 className="anti-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <StarIcon className="h-6 w-6 text-indigo-500" />
                STUDENT SUCCESS
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {course.testimonials.map((testimonial, index) => (
                  <div key={index} className="glass-card" style={{ 
                    flex: '1', 
                    minWidth: '300px', 
                    background: 'none',
                    transition: 'all 0.2s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <p className="anti-text" style={{ fontStyle: 'italic' }}>
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p className="anti-text" style={{ margin: '0.5rem 0 0 0' }}>
                      <strong>{testimonial.author}</strong>
                    </p>
                    <div style={{ marginTop: '0.5rem', color: '#eab308' }}>
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginTop: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <div className="glass-card" style={{ 
                  margin: 0, 
                  padding: '0.5rem 1rem', 
                  background: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <UserGroupIcon className="h-5 w-5 text-indigo-500" />
                  <p className="anti-text" style={{ margin: 0 }}>
                    <strong>Students Enrolled:</strong> {course.stats.studentsEnrolled}
                  </p>
                </div>
                <div className="glass-card" style={{ 
                  margin: 0, 
                  padding: '0.5rem 1rem', 
                  background: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <p className="anti-text" style={{ margin: 0 }}>
                    <strong>Completion Rate:</strong> {course.stats.completionRate}
                  </p>
                </div>
                <div className="glass-card" style={{ 
                  margin: 0, 
                  padding: '0.5rem 1rem', 
                  background: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <p className="anti-text" style={{ margin: 0 }}>
                    <strong>Average Rating:</strong> {course.stats.averageRating} ★
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ background: 'none' }}>
              <h2 className="anti-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpenIcon className="h-6 w-6 text-indigo-500" />
                LESSONS
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {course.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/courses/${courseId}/lessons/${lesson.id}/${lesson.type}`}
                    className="glass-card"
                    style={{ 
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem',
                      transition: 'all 0.2s ease',
                      background: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'none';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      {lesson.type === 'video' ? (
                        <VideoCameraIcon className="h-6 w-6 text-indigo-500" />
                      ) : (
                        <DocumentTextIcon className="h-6 w-6 text-indigo-500" />
                      )}
                      <div>
                        <h3 className="anti-subtitle" style={{ margin: 0 }}>
                          {lesson.title}
                        </h3>
                        <p className="anti-text" style={{ margin: '0.5rem 0 0 0' }}>
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ 
                        padding: '0.2rem 0.5rem',
                        background: 'rgba(99, 102, 241, 0.2)',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: '#6366f1'
                      }}>
                        {lesson.type.toUpperCase()}
                      </span>
                      <span style={{ 
                        padding: '0.2rem 0.5rem',
                        background: 'rgba(99, 102, 241, 0.2)',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: '#6366f1'
                      }}>
                        {lesson.duration}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ 
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              background: 'none',
              flexWrap: 'wrap'
            }}>
              <button 
                className="glass-button"
                style={{ 
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minWidth: '200px',
                  justifyContent: 'center'
                }}
              >
                <ShoppingCartIcon className="h-5 w-5" />
                ENROLL NOW
              </button>
              <button 
                className="glass-button"
                style={{ 
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #ec4899, #be185d)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minWidth: '200px',
                  justifyContent: 'center'
                }}
              >
                <HeartIcon className="h-5 w-5" />
                ADD TO WISHLIST
              </button>
              <button 
                className="glass-button"
                style={{ 
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minWidth: '200px',
                  justifyContent: 'center'
                }}
              >
                <GiftIcon className="h-5 w-5" />
                GIFT THIS COURSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course; 