import React, { createContext, useContext, useState } from 'react';

// Create the context
const QuizContext = createContext();

// Custom hook to use the quiz context
export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
};

// Provider component
export const QuizProvider = ({ children }) => {
  // State for quiz statistics
  const [quizStats, setQuizStats] = useState({
    score: 0,
    bankroll: 100,
    gain: 0,
    questionsAnswered: 0,
    correctAnswers: 0
  });

  // Function to update quiz statistics
  const updateQuizStats = (newStats) => {
    setQuizStats(prevStats => ({
      ...prevStats,
      ...newStats
    }));
  };

  // Value object to be provided to consumers
  const value = {
    quizStats,
    updateQuizStats
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext; 