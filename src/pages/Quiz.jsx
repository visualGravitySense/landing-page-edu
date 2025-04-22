import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Quiz = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Mock quiz data - will be replaced with Firebase data
  const quiz = {
    title: 'Business Card Design Quiz',
    questions: [
      {
        id: 1,
        question: 'What is the recommended size for a standard business card?',
        options: [
          '3.5" x 2"',
          '4" x 2.5"',
          '3" x 1.5"',
          '4.5" x 3"'
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Which of these is NOT a common business card material?',
        options: [
          'Cardstock',
          'Plastic',
          'Metal',
          'Glass'
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'What is the minimum recommended DPI for business card printing?',
        options: [
          '72 DPI',
          '150 DPI',
          '300 DPI',
          '600 DPI'
        ],
        correctAnswer: 2
      }
    ]
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const handleNextLesson = () => {
    navigate(`/courses/${courseId}/lessons/${parseInt(lessonId) + 1}/video`);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>{quiz.title}</h1>
        <p>Question {currentQuestion + 1} of {quiz.questions.length}</p>
      </div>

      {!showResult ? (
        <div className="question-container">
          <h2>{quiz.questions[currentQuestion].question}</h2>
          <div className="options">
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h2>Quiz Complete!</h2>
          <p>Your score: {score} out of {quiz.questions.length}</p>
          <div className="result-actions">
            <button className="btn btn-secondary" onClick={handleRetake}>
              Retake Quiz
            </button>
            <button className="btn btn-primary" onClick={handleNextLesson}>
              Next Lesson
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz; 