import React, { useState, useEffect } from 'react';
import { Info, Settings, TrendingUp, ChevronRight, Award, Home, RefreshCw, Coins, AlertTriangle, Zap, Trophy, Star, Medal, Crown, Target, CheckCircle, XCircle, BarChart2, Gift } from 'lucide-react';
// import './Dashboard-test.css';
// import './Dashboard.css';
import { useQuizContext } from '../context/QuizContext';
import './QuizApp.css';
import PropTypes from 'prop-types';

// Main App Component
const QuizApp = ({ navigateTo: externalNavigate, userLevel: initialUserLevel, levelProgress: initialLevelProgress }) => {
  const { updateQuizStats } = useQuizContext();
  const [currentPage, setCurrentPage] = useState('home');
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [quizHistory, setQuizHistory] = useState([]);
  const [timer, setTimer] = useState(20);
  const [timerActive, setTimerActive] = useState(false);
  const [period, setPeriod] = useState('This Month');
  
  // New gambling features
  const [currentBet, setCurrentBet] = useState(10);
  const [streak, setStreak] = useState(0);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [totalBankroll, setTotalBankroll] = useState(100); // Starting bankroll
  
  // New level and achievement features
  const [userLevel, setUserLevel] = useState(initialUserLevel || 1);
  const [experiencePoints, setExperiencePoints] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [levelProgress, setLevelProgress] = useState(initialLevelProgress || 0);
  const [totalExperience, setTotalExperience] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [totalQuizzesCompleted, setTotalQuizzesCompleted] = useState(0);
  
  // New bonus system features
  const [activeBonuses, setActiveBonuses] = useState([]);
  const [bonusHistory, setBonusHistory] = useState([]);
  const [bonusMultiplier, setBonusMultiplier] = useState(1);
  const [bonusStreak, setBonusStreak] = useState(0);
  const [bonusPoints, setBonusPoints] = useState(0);

  // Sample quiz questions
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: "Au"
    }
  ];

  // Handle navigation between pages
  const navigateTo = (page) => {
    if (externalNavigate) {
      externalNavigate(page);
    }
    setCurrentPage(page);
    if (page === 'game') {
      resetGame();
    }
  };

  // Reset game state
  const resetGame = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setGameOver(false);
    setTimer(20);
    setTimerActive(true);
    setStreak(0);
    setCurrentBet(10);
    setFiftyFiftyUsed(false);
    setEliminatedOptions([]);
    setTotalBankroll(100); // Reset bankroll
    setActiveBonuses([]);
    setBonusMultiplier(1);
    setBonusStreak(0);
    setBonusPoints(0);
  };

  // Calculate experience needed for next level
  const getExperienceForNextLevel = (level) => {
    // Experience curve: each level requires more experience
    return Math.floor(100 * Math.pow(1.5, level - 1));
  };

  // Calculate level progress percentage
  const calculateLevelProgress = () => {
    const expForNextLevel = getExperienceForNextLevel(userLevel);
    const expInCurrentLevel = experiencePoints - getTotalExperienceForLevel(userLevel - 1);
    return Math.min(100, Math.floor((expInCurrentLevel / expForNextLevel) * 100));
  };

  // Calculate total experience needed for a specific level
  const getTotalExperienceForLevel = (level) => {
    let total = 0;
    for (let i = 1; i <= level; i++) {
      total += getExperienceForNextLevel(i);
    }
    return total;
  };

  // Check and update achievements
  const checkAchievements = () => {
    const newAchievements = [...achievements];
    let achievementsUpdated = false;

    // Streak achievements
    if (streak > highestStreak) {
      setHighestStreak(streak);
      
      if (streak >= 3 && !hasAchievement('streak_3')) {
        newAchievements.push({
          id: 'streak_3',
          name: 'On Fire!',
          description: 'Achieve a 3-question streak',
          icon: 'Zap',
          date: new Date().toLocaleDateString()
        });
        achievementsUpdated = true;
      }
      
      if (streak >= 5 && !hasAchievement('streak_5')) {
        newAchievements.push({
          id: 'streak_5',
          name: 'Unstoppable!',
          description: 'Achieve a 5-question streak',
          icon: 'Trophy',
          date: new Date().toLocaleDateString()
        });
        achievementsUpdated = true;
      }
    }

    // Bankroll achievements
    if (totalBankroll >= 200 && !hasAchievement('bankroll_200')) {
      newAchievements.push({
        id: 'bankroll_200',
        name: 'Double or Nothing',
        description: 'Reach a bankroll of 200 points',
        icon: 'Coins',
        date: new Date().toLocaleDateString()
      });
      achievementsUpdated = true;
    }
    
    if (totalBankroll >= 500 && !hasAchievement('bankroll_500')) {
      newAchievements.push({
        id: 'bankroll_500',
        name: 'High Roller',
        description: 'Reach a bankroll of 500 points',
        icon: 'Crown',
        date: new Date().toLocaleDateString()
      });
      achievementsUpdated = true;
    }

    // Level achievements
    if (userLevel >= 5 && !hasAchievement('level_5')) {
      newAchievements.push({
        id: 'level_5',
        name: 'Rising Star',
        description: 'Reach level 5',
        icon: 'Star',
        date: new Date().toLocaleDateString()
      });
      achievementsUpdated = true;
    }
    
    if (userLevel >= 10 && !hasAchievement('level_10')) {
      newAchievements.push({
        id: 'level_10',
        name: 'Quiz Master',
        description: 'Reach level 10',
        icon: 'Award',
        date: new Date().toLocaleDateString()
      });
      achievementsUpdated = true;
    }

    // Quiz completion achievements
    if (totalQuizzesCompleted >= 5 && !hasAchievement('quizzes_5')) {
      newAchievements.push({
        id: 'quizzes_5',
        name: 'Dedicated Player',
        description: 'Complete 5 quizzes',
        icon: 'Target',
        date: new Date().toLocaleDateString()
      });
      achievementsUpdated = true;
    }

    // Correct answer achievements
    if (totalCorrectAnswers >= 20 && !hasAchievement('correct_20')) {
      newAchievements.push({
        id: 'correct_20',
        name: 'Knowledge Seeker',
        description: 'Answer 20 questions correctly',
        icon: 'CheckCircle',
        date: new Date().toLocaleDateString()
      });
      achievementsUpdated = true;
    }

    if (achievementsUpdated) {
      setAchievements(newAchievements);
      localStorage.setItem('achievements', JSON.stringify(newAchievements));
    }
  };

  // Check if user has a specific achievement
  const hasAchievement = (id) => {
    return achievements.some(achievement => achievement.id === id);
  };

  // Update rankings based on total experience
  const updateRankings = () => {
    const newRankings = [...rankings];
    const userRank = {
      level: userLevel,
      experience: totalExperience,
      date: new Date().toLocaleDateString()
    };
    
    // Add or update user's rank
    const existingRankIndex = newRankings.findIndex(rank => 
      rank.date === userRank.date
    );
    
    if (existingRankIndex >= 0) {
      newRankings[existingRankIndex] = userRank;
    } else {
      newRankings.push(userRank);
    }
    
    // Sort rankings by experience (descending)
    newRankings.sort((a, b) => b.experience - a.experience);
    
    // Keep only top 10 rankings
    const topRankings = newRankings.slice(0, 10);
    
    setRankings(topRankings);
    localStorage.setItem('rankings', JSON.stringify(topRankings));
  };

  // Handle bet change
  const handleBetChange = (amount) => {
    // Ensure bet is not less than 5 or more than the total bankroll
    const newBet = Math.min(Math.max(5, currentBet + amount), totalBankroll);
    setCurrentBet(newBet);
  };

  // Use 50/50 lifeline
  const useFiftyFifty = () => {
    if (fiftyFiftyUsed || answered) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;
    
    // Get incorrect options
    const incorrectOptions = currentQuestion.options.filter(option => option !== correctAnswer);
    
    // Randomly select two incorrect options to eliminate
    const shuffled = incorrectOptions.sort(() => 0.5 - Math.random());
    const toEliminate = shuffled.slice(0, Math.min(2, incorrectOptions.length));
    
    setEliminatedOptions(toEliminate);
    setFiftyFiftyUsed(true);
    
    // Cost of using 50/50
    setTotalBankroll(totalBankroll - 10);
  };

  // Generate random bonus
  const generateRandomBonus = () => {
    const bonusTypes = [
      { id: 'double_points', name: 'Double Points', description: 'Earn double points for your next correct answer', multiplier: 2, duration: 1 },
      { id: 'triple_points', name: 'Triple Points', description: 'Earn triple points for your next correct answer', multiplier: 3, duration: 1 },
      { id: 'extra_time', name: 'Extra Time', description: 'Get 10 extra seconds on your next question', duration: 1 },
      { id: 'free_bet', name: 'Free Bet', description: 'Your next bet is free (no risk of losing points)', duration: 1 },
      { id: 'streak_boost', name: 'Streak Boost', description: 'Your streak bonus is doubled for the next 3 questions', multiplier: 2, duration: 3 }
    ];
    
    // 20% chance to get a bonus
    if (Math.random() < 0.2) {
      const randomBonus = bonusTypes[Math.floor(Math.random() * bonusTypes.length)];
      return randomBonus;
    }
    
    return null;
  };

  // Apply bonus effects
  const applyBonusEffects = (bonus) => {
    if (!bonus) return;
    
    // Add bonus to active bonuses
    setActiveBonuses([...activeBonuses, { ...bonus, applied: false }]);
    
    // Update bonus history
    setBonusHistory([...bonusHistory, { ...bonus, date: new Date().toLocaleDateString() }]);
    
    // Save bonus history to localStorage
    localStorage.setItem('bonusHistory', JSON.stringify([...bonusHistory, { ...bonus, date: new Date().toLocaleDateString() }]));
    
    // Show bonus notification
    showBonusNotification(bonus);
  };

  // Show bonus notification
  const showBonusNotification = (bonus) => {
    // This would be implemented with a toast notification in a real app
    // For now, we'll just log it
    console.log(`Bonus earned: ${bonus.name} - ${bonus.description}`);
  };

  // Process active bonuses
  const processActiveBonuses = () => {
    let newMultiplier = 1;
    let newTimer = timer;
    let freeBet = false;
    
    // Process each active bonus
    const updatedBonuses = activeBonuses.map(bonus => {
      if (bonus.applied) {
        // Decrease duration for applied bonuses
        return { ...bonus, duration: bonus.duration - 1 };
      } else {
        // Apply new bonuses
        if (bonus.id === 'double_points' || bonus.id === 'triple_points') {
          newMultiplier = bonus.multiplier;
        } else if (bonus.id === 'extra_time') {
          newTimer = timer + 10;
        } else if (bonus.id === 'free_bet') {
          freeBet = true;
        } else if (bonus.id === 'streak_boost') {
          // This will be applied when calculating streak bonus
        }
        
        return { ...bonus, applied: true };
      }
    }).filter(bonus => bonus.duration > 0); // Remove expired bonuses
    
    // Update state
    setActiveBonuses(updatedBonuses);
    setBonusMultiplier(newMultiplier);
    setTimer(newTimer);
    
    return { multiplier: newMultiplier, freeBet };
  };

  // Handle answer selection
  const handleOptionSelect = (option) => {
    if (answered) return;
    
    setSelectedOption(option);
    setAnswered(true);
    setTimerActive(false);
    
    // Process active bonuses
    const bonusEffects = processActiveBonuses();
    
    if (option === questions[currentQuestionIndex].correctAnswer) {
      // Correct answer - add bet to score
      // Increase bet by streak factor (20% per streak)
      const streakBonus = streak > 0 ? (streak * 0.2) : 0;
      const winAmount = Math.round(currentBet * (1 + streakBonus) * bonusEffects.multiplier);
      
      setScore(score + winAmount);
      setTotalBankroll(totalBankroll + winAmount);
      setStreak(streak + 1);
      
      // Update bonus streak
      setBonusStreak(bonusStreak + 1);
      
      // Check for bonus streak rewards
      if (bonusStreak + 1 >= 3) {
        const streakBonus = generateRandomBonus();
        if (streakBonus) {
          applyBonusEffects(streakBonus);
        }
        setBonusStreak(0);
      }
      
      // Update correct answers count
      setTotalCorrectAnswers(totalCorrectAnswers + 1);
      
      // Award experience points for correct answer
      const expGained = Math.round(10 + (streak * 2));
      setExperiencePoints(experiencePoints + expGained);
      setTotalExperience(totalExperience + expGained);
      
      // Check for level up
      checkLevelUp();
      
      // Check achievements
      checkAchievements();
      
      // Generate random bonus (10% chance)
      if (Math.random() < 0.1) {
        const randomBonus = generateRandomBonus();
        if (randomBonus) {
          applyBonusEffects(randomBonus);
        }
      }
    } else {
      // Wrong answer - lose bet (unless free bet bonus is active)
      if (!bonusEffects.freeBet) {
        setTotalBankroll(totalBankroll - currentBet);
      }
      setStreak(0);
      setBonusStreak(0);
    }
  };

  // Check if user should level up
  const checkLevelUp = () => {
    const expForNextLevel = getExperienceForNextLevel(userLevel);
    const totalExpForCurrentLevel = getTotalExperienceForLevel(userLevel);
    
    if (experiencePoints >= totalExpForCurrentLevel + expForNextLevel) {
      setUserLevel(userLevel + 1);
      // Update level progress
      setLevelProgress(calculateLevelProgress());
      // Update rankings after level up
      updateRankings();
    } else {
      // Just update level progress
      setLevelProgress(calculateLevelProgress());
    }
  };

  // Move to next question or end game
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setAnswered(false);
      setTimer(20);
      setTimerActive(true);
      setEliminatedOptions([]);
      
      // Generate random bonus at the start of a new question (5% chance)
      if (Math.random() < 0.05) {
        const randomBonus = generateRandomBonus();
        if (randomBonus) {
          applyBonusEffects(randomBonus);
        }
      }
    } else {
      endGame();
    }
  };

  // End game and save results
  const endGame = () => {
    const finalScore = score;
    const finalBankroll = totalBankroll;
    const initialBankroll = 100;
    const gain = finalBankroll - initialBankroll;
    
    // Update quiz statistics in context
    updateQuizStats({
      score: finalScore,
      bankroll: finalBankroll,
      gain: gain,
      questionsAnswered: currentQuestionIndex + 1,
      correctAnswers: score
    });

    // Save to localStorage
    const quizHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    quizHistory.push({
      date: new Date().toISOString(),
      score: finalScore,
      bankroll: finalBankroll,
      gain: gain
    });
    localStorage.setItem('quizHistory', JSON.stringify(quizHistory));

    setGameOver(true);
  };

  // Timer effect
  useEffect(() => {
    let interval;
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0 && timerActive) {
      setAnswered(true);
      setTimerActive(false);
      // Lose bet if time runs out
      setTotalBankroll(totalBankroll - currentBet);
      setStreak(0);
    }
    return () => clearInterval(interval);
  }, [timer, timerActive, totalBankroll, currentBet]);

  // Load quiz history, achievements, and rankings from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('quizHistory');
    if (savedHistory) {
      setQuizHistory(JSON.parse(savedHistory));
    }
    
    const savedAchievements = localStorage.getItem('achievements');
    if (savedAchievements) {
      setAchievements(JSON.parse(savedAchievements));
    }
    
    const savedRankings = localStorage.getItem('rankings');
    if (savedRankings) {
      setRankings(JSON.parse(savedRankings));
    }
    
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      setUserLevel(userData.level || 1);
      setExperiencePoints(userData.experience || 0);
      setTotalExperience(userData.totalExperience || 0);
      setHighestStreak(userData.highestStreak || 0);
      setTotalCorrectAnswers(userData.totalCorrectAnswers || 0);
      setTotalQuizzesCompleted(userData.totalQuizzesCompleted || 0);
      setLevelProgress(calculateLevelProgress());
    }
    
    const savedBonusHistory = localStorage.getItem('bonusHistory');
    if (savedBonusHistory) {
      setBonusHistory(JSON.parse(savedBonusHistory));
    }
  }, []);

  // Save user data to localStorage when it changes
  useEffect(() => {
    const userData = {
      level: userLevel,
      experience: experiencePoints,
      totalExperience: totalExperience,
      highestStreak: highestStreak,
      totalCorrectAnswers: totalCorrectAnswers,
      totalQuizzesCompleted: totalQuizzesCompleted
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userLevel, experiencePoints, totalExperience, highestStreak, totalCorrectAnswers, totalQuizzesCompleted]);

  // Render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} userLevel={userLevel} levelProgress={levelProgress} />;
      case 'game':
        return (
          <GamePage
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            selectedOption={selectedOption}
            answered={answered}
            handleOptionSelect={handleOptionSelect}
            handleNextQuestion={handleNextQuestion}
            score={score}
            gameOver={gameOver}
            resetGame={resetGame}
            navigateTo={navigateTo}
            timer={timer}
            currentBet={currentBet}
            handleBetChange={handleBetChange}
            streak={streak}
            useFiftyFifty={useFiftyFifty}
            fiftyFiftyUsed={fiftyFiftyUsed}
            eliminatedOptions={eliminatedOptions}
            totalBankroll={totalBankroll}
            userLevel={userLevel}
            levelProgress={levelProgress}
            activeBonuses={activeBonuses}
            bonusMultiplier={bonusMultiplier}
          />
        );
      case 'statistics':
        return <StatisticsPage quizHistory={quizHistory} navigateTo={navigateTo} />;
      case 'achievements':
        return <AchievementsPage achievements={achievements} navigateTo={navigateTo} />;
      case 'rankings':
        return <RankingsPage rankings={rankings} navigateTo={navigateTo} />;
      case 'bonuses':
        return <BonusesPage bonusHistory={bonusHistory} navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} userLevel={userLevel} levelProgress={levelProgress} />;
    }
  };

  return (
    <div className="quiz-container min-h-screen ">
      <div className="max-w-2xl mx-auto w-full">
        <header className="bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 border-b border-indigo-500/20 rounded-2xl shadow-lg shadow-purple-500/20 mb-4">
          <div className="p-4 flex items-center justify-between">
            <div className="logo-container w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
              Q
          </div>
            
            <nav className="flex items-center gap-8">
          <button 
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  currentPage === 'home' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:bg-white/10'
                }`}
                onClick={() => setCurrentPage('home')}
              >
                <Home size={18} />
          </button>
          {/* <button 
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  currentPage === 'stats' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:bg-white/10'
                }`}
                onClick={() => setCurrentPage('stats')}
              >
                <BarChart2 size={18} />
          </button> */}
          <button 
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  currentPage === 'achievements' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:bg-white/10'
                }`}
                onClick={() => setCurrentPage('achievements')}
              >
                <Trophy size={18} />
          </button>
          <button 
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  currentPage === 'bonuses' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:bg-white/10'
                }`}
                onClick={() => setCurrentPage('bonuses')}
              >
                <Gift size={18} />
          </button>
          <button 
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  currentPage === 'rankings' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:bg-white/10'
                }`}
                onClick={() => setCurrentPage('rankings')}
              >
                <Crown size={18} />
          </button>
      </nav>
    </div>
        </header>
        <main className="px-4">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

QuizApp.propTypes = {
  navigateTo: PropTypes.func,
  userLevel: PropTypes.number,
  levelProgress: PropTypes.number
};

QuizApp.defaultProps = {
  navigateTo: undefined,
  userLevel: 1,
  levelProgress: 0
};

// Home Page Component
const HomePage = ({ navigateTo, userLevel, levelProgress }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="home-card bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="text-6xl mb-4 text-indigo-500 flex justify-center">
          <Award />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-gray-100">Welcome to QuizMaster!</h2>
        <p className="text-lg mb-6 text-gray-600">
          Test your knowledge with our interactive quizzes. Challenge yourself, place bets, and increase your bankroll!
        </p>
        
        {/* Level Indicator */}
        <div className="level-card bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 mb-6 border border-indigo-100">
          <div className="flex items-center justify-center mb-2">
            <Trophy size={24} className="text-yellow-500 mr-2" />
            <h3 className="text-xl font-bold text-gray-800">Level {userLevel}</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
              style={{width: `${levelProgress}%`}}
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            {levelProgress}% to next level
          </p>
        </div>
        
        <button
          onClick={() => navigateTo('game')}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center mx-auto transition hover:from-indigo-600 hover:to-purple-600 hover:-translate-y-0.5"
        >
          Start Quiz <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

// Game Page Component
const GamePage = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  answered,
  handleOptionSelect,
  handleNextQuestion,
  score,
  gameOver,
  resetGame,
  navigateTo,
  timer,
  currentBet,
  handleBetChange,
  streak,
  useFiftyFifty,
  fiftyFiftyUsed,
  eliminatedOptions,
  totalBankroll,
  userLevel,
  levelProgress,
  activeBonuses,
  bonusMultiplier
}) => {
  if (gameOver) {
    return (
      <div className="results-container max-w-md mx-auto rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl mb-6 text-blue-500 flex justify-center">
          <Coins />
        </div>
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="results-score mb-2">Final Bankroll: <span className="font-bold">{totalBankroll} points</span></p>
        <p className="results-score mb-6">
          Gain/Loss: <span className={`font-bold ${totalBankroll > 100 ? 'text-green-600' : 'text-red-600'}`}>
            {totalBankroll > 100 ? '+' : ''}{totalBankroll - 100} points ({Math.round((totalBankroll / 100 - 1) * 100)}%)
          </span>
        </p>
        
        {/* Level Progress */}
        <div className="level-progress bg-gray-100 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <Trophy size={20} className="text-yellow-500 mr-2" />
            <h3 className="text-lg font-bold">Level {userLevel}</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" 
              style={{width: `${levelProgress}%`}}
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            {levelProgress}% to next level
          </p>
        </div>
        
        <div className="flex flex-col space-y-3">
          <button
            onClick={resetGame}
            className="action-button text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center"
          >
            <RefreshCw size={16} className="mr-2" /> Play Again
          </button>
          <button
            onClick={() => navigateTo('statistics')}
            className="action-button text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center"
          >
            <TrendingUp size={16} className="mr-2" /> View Statistics
          </button>
          <button
            onClick={() => navigateTo('home')}
            className="action-button text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center"
          >
            <Home size={16} className="mr-2" /> Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="game-container rounded-lg shadow-lg p-6">
        {/* Status Bar */}
        <div className="flex justify-between items-center mb-4">
          <div className="question-indicator px-4 py-2 rounded-lg">
            Question {questionNumber}/{totalQuestions}
          </div>
          <div className="flex items-center">
            <div className="bankroll-indicator px-4 py-2 rounded-lg mr-3">
              <Coins size={16} className="inline mr-1" /> {totalBankroll}
            </div>
            <div className={`timer-indicator px-4 py-2 rounded-lg ${
              timer > 10 ? 'normal' : 'warning'
            }`}>
              Time: {timer}s
            </div>
          </div>
        </div>
        
        {/* Level Progress */}
        <div className="level-indicator px-4 py-2 rounded-lg mb-4">
          <div className="flex items-center gap-2">
            <Trophy size={16} className="text-yellow-500" /> 
            <span>Level {userLevel}</span>
            <div className="w-24 bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-yellow-500 rounded-full transition-all duration-300" 
                style={{width: `${levelProgress}%`}}
              />
            </div>
            <span className="text-xs">{levelProgress}%</span>
          </div>
        </div>
        
        {/* Active Bonuses */}
        {activeBonuses.length > 0 && (
          <div className="bonus-indicator px-4 py-2 rounded-lg mb-4 bg-purple-100 text-purple-800 text-center">
            <div className="flex items-center justify-center flex-wrap">
              <Zap size={16} className="inline mr-1" /> Active Bonuses:
              {activeBonuses.map((bonus, index) => (
                <span key={index} className="mx-1 px-2 py-1 bg-purple-200 rounded-full text-xs">
                  {bonus.name} ({bonus.duration} left)
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Streak Indicator */}
        {streak > 0 && (
          <div className="streak-indicator px-4 py-2 rounded-lg mb-4 bg-purple-100 text-purple-800 text-center">
            <Zap size={16} className="inline mr-1" /> Streak: {streak} - Bonus: +{streak * 20}%
            {bonusMultiplier > 1 && (
              <span className="ml-1 text-yellow-600">
                (x{bonusMultiplier} multiplier active!)
              </span>
            )}
          </div>
        )}
        
        {/* Betting Controls */}
        <div className="betting-controls mb-4 p-6 rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 border border-indigo-500/20 shadow-lg shadow-purple-500/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 text-transparent bg-clip-text">Your Bet</h3>
            <div className="flex items-center bg-black/30 rounded-xl p-2 backdrop-blur-sm">
              <button 
                onClick={() => handleBetChange(-5)} 
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold text-xl shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={answered || currentBet <= 5}
              >
                -
              </button>
              <span className="mx-4 font-bold text-2xl text-amber-300">{currentBet}</span>
              <button 
                onClick={() => handleBetChange(5)} 
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-xl shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={answered || currentBet >= totalBankroll}
              >
                +
              </button>
            </div>
          </div>
          
          {/* 50/50 Lifeline */}
          <div className="text-center">
            <button 
              onClick={useFiftyFifty}
              disabled={fiftyFiftyUsed || answered || totalBankroll < 10}
              className={`px-6 py-3 rounded-xl text-white flex items-center mx-auto transition-all duration-200 ${
                fiftyFiftyUsed 
                  ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                  : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5'
              }`}
            >
              <AlertTriangle size={20} className="mr-2" /> 
              50/50 Help (-10 points)
            </button>
          </div>
        </div>
        
        <h2 className="question-text">{question.question}</h2>
        
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            const isEliminated = eliminatedOptions.includes(option);
            
            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                disabled={answered || isEliminated}
                className={`option-button w-full rounded-lg text-left transition ${
                  isEliminated ? 'opacity-30 cursor-not-allowed' : ''
                } ${
                  !answered
                    ? ''
                    : option === question.correctAnswer
                      ? 'correct-answer'
                      : option === selectedOption
                        ? 'wrong-answer'
                        : ''
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        
        {answered && (
          <div className="mt-4 text-center">
            {selectedOption === question.correctAnswer ? (
              <p className="feedback-text text-green-600 font-medium mb-4">
                Correct! +{Math.round(currentBet * (1 + (streak - 1) * 0.2) * bonusMultiplier)} points!
                {bonusMultiplier > 1 && (
                  <span className="ml-1 text-yellow-600">
                    (x{bonusMultiplier} multiplier applied!)
                  </span>
                )}
              </p>
            ) : (
              <p className="feedback-text text-red-600 font-medium mb-4">
                Incorrect. The correct answer is {question.correctAnswer}. -{currentBet} points.
              </p>
            )}
            <button
              onClick={handleNextQuestion}
              className="next-button text-white rounded-lg"
            >
              {questionNumber === totalQuestions ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Statistics Page Component
const StatisticsPage = ({ quizHistory, navigateTo }) => {
  const calculateAverageGain = () => {
    if (quizHistory.length === 0) return 0;
    const totalGain = quizHistory.reduce((sum, quiz) => sum + (quiz.score - quiz.initialBankroll || 0), 0);
    return Math.round(totalGain / quizHistory.length);
  };

  const getBestScore = () => {
    if (quizHistory.length === 0) return 0;
    return Math.max(...quizHistory.map(quiz => quiz.score || 0));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="stats-container rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Gambling Statistics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="stats-card bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 mb-1">Total Games</p>
            <p className="stats-value text-3xl font-bold text-blue-600">{quizHistory.length}</p>
          </div>
          <div className="stats-card bg-green-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 mb-1">Avg. Gain/Loss</p>
            <p className={`stats-value text-3xl font-bold ${calculateAverageGain() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {calculateAverageGain() >= 0 ? '+' : ''}{calculateAverageGain()}
            </p>
          </div>
          <div className="stats-card bg-purple-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 mb-1">Best Bankroll</p>
            <p className="stats-value text-3xl font-bold text-purple-600">{getBestScore()}</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-4">Game History</h3>
        {quizHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Final Score</th>
                  <th className="p-3 text-left">Gain/Loss</th>
                </tr>
              </thead>
              <tbody>
                {quizHistory.slice().reverse().map((quiz, index) => {
                  const gainLoss = quiz.score - (quiz.initialBankroll || 100);
                  return (
                    <tr key={index}>
                      <td className="p-3">{quiz.date}</td>
                      <td className="p-3">{quiz.score}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded ${
                          gainLoss > 0 ? 'bg-green-100 text-green-800' : 
                          gainLoss === 0 ? 'bg-gray-100 text-gray-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {gainLoss > 0 ? '+' : ''}{gainLoss} ({Math.round((gainLoss / (quiz.initialBankroll || 100)) * 100)}%)
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No game history yet. Take a quiz to see your statistics!</p>
        )}
        
        <div className="mt-6 text-center">
          <button
            onClick={() => navigateTo('game')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

// Achievements Page Component
const AchievementsPage = ({ achievements, navigateTo }) => {
  // Group achievements by category
  const groupedAchievements = {
    streak: achievements.filter(a => a.id.startsWith('streak_')),
    bankroll: achievements.filter(a => a.id.startsWith('bankroll_')),
    level: achievements.filter(a => a.id.startsWith('level_')),
    quiz: achievements.filter(a => a.id.startsWith('quizzes_')),
    correct: achievements.filter(a => a.id.startsWith('correct_'))
  };

  // Get icon component based on icon name
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Zap': return <Zap size={24} />;
      case 'Trophy': return <Trophy size={24} />;
      case 'Coins': return <Coins size={24} />;
      case 'Crown': return <Crown size={24} />;
      case 'Star': return <Star size={24} />;
      case 'Award': return <Award size={24} />;
      case 'Target': return <Target size={24} />;
      case 'CheckCircle': return <CheckCircle size={24} />;
      default: return <Award size={24} />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="achievements-container rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Achievements</h2>
        
        {achievements.length === 0 ? (
          <div className="text-center py-8">
            <XCircle size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">You haven't earned any achievements yet. Keep playing to unlock them!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Streak Achievements */}
            {groupedAchievements.streak.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Zap size={20} className="mr-2 text-yellow-500" /> Streak Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedAchievements.streak.map((achievement) => (
                    <div key={achievement.id} className="achievement-card bg-yellow-50 rounded-lg p-4 flex items-center">
                      <div className="achievement-icon mr-4 text-yellow-500">
                        {getIcon(achievement.icon)}
                      </div>
                      <div>
                        <h4 className="font-bold">{achievement.name}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned: {achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Bankroll Achievements */}
            {groupedAchievements.bankroll.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Coins size={20} className="mr-2 text-yellow-500" /> Bankroll Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedAchievements.bankroll.map((achievement) => (
                    <div key={achievement.id} className="achievement-card bg-yellow-50 rounded-lg p-4 flex items-center">
                      <div className="achievement-icon mr-4 text-yellow-500">
                        {getIcon(achievement.icon)}
                      </div>
                      <div>
                        <h4 className="font-bold">{achievement.name}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned: {achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Level Achievements */}
            {groupedAchievements.level.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Trophy size={20} className="mr-2 text-yellow-500" /> Level Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedAchievements.level.map((achievement) => (
                    <div key={achievement.id} className="achievement-card bg-yellow-50 rounded-lg p-4 flex items-center">
                      <div className="achievement-icon mr-4 text-yellow-500">
                        {getIcon(achievement.icon)}
                      </div>
                      <div>
                        <h4 className="font-bold">{achievement.name}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned: {achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quiz Completion Achievements */}
            {groupedAchievements.quiz.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Target size={20} className="mr-2 text-yellow-500" /> Quiz Completion Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedAchievements.quiz.map((achievement) => (
                    <div key={achievement.id} className="achievement-card bg-yellow-50 rounded-lg p-4 flex items-center">
                      <div className="achievement-icon mr-4 text-yellow-500">
                        {getIcon(achievement.icon)}
                      </div>
                      <div>
                        <h4 className="font-bold">{achievement.name}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned: {achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Correct Answer Achievements */}
            {groupedAchievements.correct.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <CheckCircle size={20} className="mr-2 text-yellow-500" /> Knowledge Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedAchievements.correct.map((achievement) => (
                    <div key={achievement.id} className="achievement-card bg-yellow-50 rounded-lg p-4 flex items-center">
                      <div className="achievement-icon mr-4 text-yellow-500">
                        {getIcon(achievement.icon)}
                      </div>
                      <div>
                        <h4 className="font-bold">{achievement.name}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned: {achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-6 text-center">
          <button
            onClick={() => navigateTo('game')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

// Rankings Page Component
const RankingsPage = ({ rankings, navigateTo }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="rankings-container rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Leaderboard</h2>
        
        {rankings.length === 0 ? (
          <div className="text-center py-8">
            <Crown size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">No rankings yet. Play quizzes to climb the leaderboard!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-3 text-left">Rank</th>
                  <th className="p-3 text-left">Level</th>
                  <th className="p-3 text-left">Experience</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((rank, index) => (
                  <tr key={index} className={index === 0 ? 'bg-yellow-50' : ''}>
                    <td className="p-3">
                      {index === 0 ? (
                        <div className="flex items-center">
                          <Crown size={16} className="text-yellow-500 mr-1" />
                          <span>1st</span>
                        </div>
                      ) : index === 1 ? (
                        <div className="flex items-center">
                          <Medal size={16} className="text-gray-400 mr-1" />
                          <span>2nd</span>
                        </div>
                      ) : index === 2 ? (
                        <div className="flex items-center">
                          <Medal size={16} className="text-amber-600 mr-1" />
                          <span>3rd</span>
                        </div>
                      ) : (
                        <span>{index + 1}th</span>
                      )}
                    </td>
                    <td className="p-3">Level {rank.level}</td>
                    <td className="p-3">{rank.experience}</td>
                    <td className="p-3">{rank.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="mt-6 text-center">
          <button
            onClick={() => navigateTo('game')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

// Bonuses Page Component
const BonusesPage = ({ bonusHistory, navigateTo }) => {
  // Group bonuses by type
  const groupedBonuses = {
    double_points: bonusHistory.filter(b => b.id === 'double_points'),
    triple_points: bonusHistory.filter(b => b.id === 'triple_points'),
    extra_time: bonusHistory.filter(b => b.id === 'extra_time'),
    free_bet: bonusHistory.filter(b => b.id === 'free_bet'),
    streak_boost: bonusHistory.filter(b => b.id === 'streak_boost')
  };

  // Get icon component based on bonus id
  const getBonusIcon = (id) => {
    switch (id) {
      case 'double_points':
      case 'triple_points':
        return <Coins size={24} className="text-yellow-500" />;
      case 'extra_time':
        return <RefreshCw size={24} className="text-blue-500" />;
      case 'free_bet':
        return <AlertTriangle size={24} className="text-green-500" />;
      case 'streak_boost':
        return <Zap size={24} className="text-purple-500" />;
      default:
        return <Award size={24} className="text-gray-500" />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bonuses-container rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Bonus History</h2>
        
        {bonusHistory.length === 0 ? (
          <div className="text-center py-8">
            <Zap size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">You haven't earned any bonuses yet. Keep playing to unlock them!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Double Points Bonuses */}
            {groupedBonuses.double_points.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Coins size={20} className="mr-2 text-yellow-500" /> Double Points
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedBonuses.double_points.map((bonus, index) => (
                    <div key={index} className="bonus-card bg-yellow-50 rounded-lg p-4 flex items-center">
                      <div className="bonus-icon mr-4">
                        {getBonusIcon(bonus.id)}
                      </div>
                      <div>
                        <h4 className="font-bold">{bonus.name}</h4>
                        <p className="text-sm text-gray-600">{bonus.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned: {bonus.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Triple Points Bonuses */}
            {groupedBonuses.triple_points.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Coins size={20} className="mr-2 text-yellow-500" /> Triple Points
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedBonuses.triple_points.map((bonus, index) => (
                    <div key={index} className="bonus-card bg-yellow-50 rounded-lg p-4 flex items-center">
                      <div className="bonus-icon mr-4">
                        {getBonusIcon(bonus.id)}
                      </div>
                      <div>
                        <h4 className="font-bold">{bonus.name}</h4>
                        <p className="text-sm text-gray-600">{bonus.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned: {bonus.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Extra Time Bonuses */}
            {groupedBonuses.extra_time.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <RefreshCw size={20} className="mr-2 text-blue-500" /> Extra Time
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedBonuses.extra_time.map((bonus, index) => (
                    <div key={index} className="bonus-card bg-blue-50 rounded-lg p-4 flex items-center">
                      <div className="bonus-icon mr-4">
                        {getBonusIcon(bonus.id)}
                      </div>
                      <div>
                        <h4 className="font-bold">{bonus.name}</h4>
                        <p className="text-sm text-gray-600">{bonus.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned: {bonus.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Free Bet Bonuses */}
            {groupedBonuses.free_bet.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <AlertTriangle size={20} className="mr-2 text-green-500" /> Free Bet
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedBonuses.free_bet.map((bonus, index) => (
                    <div key={index} className="bonus-card bg-green-50 rounded-lg p-4 flex items-center">
                      <div className="bonus-icon mr-4">
                        {getBonusIcon(bonus.id)}
                      </div>
                      <div>
                        <h4 className="font-bold">{bonus.name}</h4>
                        <p className="text-sm text-gray-600">{bonus.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned: {bonus.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Streak Boost Bonuses */}
            {groupedBonuses.streak_boost.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Zap size={20} className="mr-2 text-purple-500" /> Streak Boost
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedBonuses.streak_boost.map((bonus, index) => (
                    <div key={index} className="bonus-card bg-purple-50 rounded-lg p-4 flex items-center">
                      <div className="bonus-icon mr-4">
                        {getBonusIcon(bonus.id)}
                      </div>
                      <div>
                        <h4 className="font-bold">{bonus.name}</h4>
                        <p className="text-sm text-gray-600">{bonus.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned: {bonus.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-6 text-center">
          <button
            onClick={() => navigateTo('game')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

// Anti-Design CSS
const antiDesignStyles = `
  .quiz-app-container {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    // background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    min-height: 100vh;
    color: #ffffff;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    transition: all 0.3s ease;
  }

  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45);
  }

  .glass-button {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 10px 20px;
    color: #ffffff;
    transition: all 0.3s ease;
  }

  .glass-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .glass-input {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 8px 16px;
    color: #ffffff;
  }

  .glass-input:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }

  .glass-header {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .glass-footer {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .glass-progress {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }

  .glass-progress-bar {
    background: linear-gradient(90deg, #4CAF50, #8BC34A);
    height: 100%;
    transition: width 0.3s ease;
  }

  .glass-stats {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 15px;
    margin: 10px 0;
  }

  .glass-achievement {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .glass-ranking {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .glass-bonus {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .glass-timer {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .glass-option {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 12px 20px;
    margin: 8px 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .glass-option:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }

  .glass-option.correct {
    background: rgba(76, 175, 80, 0.2);
    border-color: rgba(76, 175, 80, 0.4);
  }

  .glass-option.incorrect {
    background: rgba(244, 67, 54, 0.2);
    border-color: rgba(244, 67, 54, 0.4);
  }

  .glass-score {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 15px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .glass-level {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .glass-streak {
    background: rgba(255, 193, 7, 0.2);
    border-radius: 12px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba(255, 193, 7, 0.4);
  }
`;

export default QuizApp;