import { useState, useEffect } from 'react';
import { Check, X, HelpCircle, AlertCircle, Volume2 } from 'lucide-react';

const MultipleChoice = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
    onAnswer(option === correctAnswer);
  };

  return (
    <div className="worksheet-container">
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">{question}</h3>
        <button className="text-primary hover:text-primary-dark">
          <Volume2 size={16} />
        </button>
      </div>
      
      <div className="space-y-3 mb-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`worksheet-option ${selectedOption === option ? 'worksheet-option-selected' : ''}`}
            onClick={() => !showFeedback && handleSelect(option)}
          >
            <div className="w-6 h-6 rounded-full border border-surface-300 dark:border-surface-600 flex items-center justify-center flex-shrink-0">
              {selectedOption === option && (
                <div className="w-4 h-4 rounded-full bg-primary dark:bg-primary-light"></div>
              )}
            </div>
            <span>{option}</span>
            {showFeedback && selectedOption === option && (
              <span className="ml-auto">
                {option === correctAnswer ? (
                  <Check className="text-green-500" size={20} />
                ) : (
                  <X className="text-red-500" size={20} />
                )}
              </span>
            )}
          </div>
        ))}
      </div>
      
      {showFeedback && (
        <div className={`p-3 rounded-lg ${selectedOption === correctAnswer ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'}`}>
          {selectedOption === correctAnswer ? (
            <div className="flex items-start">
              <Check className="mr-2 flex-shrink-0 mt-1" size={16} />
              <p>Correct! Well done.</p>
            </div>
          ) : (
            <div className="flex items-start">
              <X className="mr-2 flex-shrink-0 mt-1" size={16} />
              <div>
                <p>Not quite. The correct answer is: <strong>{correctAnswer}</strong></p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const FillInBlank = ({ sentence, blanks, answers, onAnswer }) => {
  const [userAnswers, setUserAnswers] = useState(Array(blanks.length).fill(''));
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const correct = userAnswers.every((answer, index) => 
      answer.toLowerCase().trim() === answers[index].toLowerCase().trim()
    );
    setIsCorrect(correct);
    setShowFeedback(true);
    onAnswer(correct);
  };

  const renderSentenceWithBlanks = () => {
    let result = [];
    let currentIndex = 0;
    let blankIndex = 0;
    
    // Create a regex that matches the placeholders [1], [2], etc.
    const regex = /\[(\d+)\]/g;
    let match;
    let lastIndex = 0;
    
    while ((match = regex.exec(sentence)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        result.push(<span key={`text-${currentIndex}`}>{sentence.substring(lastIndex, match.index)}</span>);
        currentIndex++;
      }
      
      // Add the input field
      const blankPosition = parseInt(match[1]) - 1;
      result.push(
        <input
          key={`input-${currentIndex}`}
          type="text"
          className="worksheet-input"
          value={userAnswers[blankPosition] || ''}
          onChange={(e) => handleChange(blankPosition, e.target.value)}
          disabled={showFeedback}
        />
      );
      currentIndex++;
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add the remaining text after the last match
    if (lastIndex < sentence.length) {
      result.push(<span key={`text-${currentIndex}`}>{sentence.substring(lastIndex)}</span>);
    }
    
    return result;
  };

  return (
    <div className="worksheet-container">
      <h3 className="text-lg font-medium mb-4">Complete the sentence:</h3>
      
      <div className="mb-6 text-lg">
        {renderSentenceWithBlanks()}
      </div>
      
      {!showFeedback ? (
        <button 
          className="btn btn-primary"
          onClick={checkAnswers}
        >
          Check Answers
        </button>
      ) : (
        <div className={`p-3 rounded-lg mt-4 ${isCorrect ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'}`}>
          {isCorrect ? (
            <div className="flex items-start">
              <Check className="mr-2 flex-shrink-0 mt-1" size={16} />
              <p>Perfect! Your answers are correct.</p>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              <div className="flex items-start">
                <AlertCircle className="mr-2 flex-shrink-0 mt-1" size={16} />
                <p>Some answers need correction. Here are the correct answers:</p>
              </div>
              <ul className="list-disc pl-8">
                {answers.map((answer, index) => (
                  <li key={index} className={userAnswers[index].toLowerCase().trim() === answer.toLowerCase().trim() ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}>
                    Blank {index + 1}: <strong>{answer}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <button 
            className="btn btn-outline mt-3"
            onClick={() => {
              setShowFeedback(false);
              setUserAnswers(Array(blanks.length).fill(''));
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

const Matching = ({ items, onAnswer }) => {
  const [matches, setMatches] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  // Shuffle right column items
  const [shuffledTargets] = useState(() => {
    return [...items.map(item => item.target)].sort(() => Math.random() - 0.5);
  });

  const handleMatch = (source, target) => {
    setMatches(prev => ({
      ...prev,
      [source]: target
    }));
  };

  const checkMatches = () => {
    const allCorrect = items.every(item => matches[item.source] === item.target);
    setIsCorrect(allCorrect);
    setShowFeedback(true);
    onAnswer(allCorrect);
  };

  return (
    <div className="worksheet-container">
      <h3 className="text-lg font-medium mb-4">Match the items:</h3>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="border rounded-lg p-3 bg-surface-50 dark:bg-surface-700">
              <p>{item.source}</p>
              {showFeedback && (
                <span className="inline-block mt-1 text-sm">
                  {matches[item.source] === item.target ? (
                    <span className="text-green-600 dark:text-green-400 flex items-center">
                      <Check size={14} className="mr-1" /> Correct
                    </span>
                  ) : (
                    <span className="text-red-600 dark:text-red-400 flex items-center">
                      <X size={14} className="mr-1" /> Incorrect
                    </span>
                  )}
                </span>
              )}
            </div>
          ))}
        </div>
        
        <div className="space-y-3">
          {shuffledTargets.map((target, index) => (
            <div 
              key={index}
              className="border rounded-lg p-3 bg-white dark:bg-surface-800 cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
              onClick={() => {
                if (!showFeedback) {
                  const selectedSource = Object.keys(matches).find(key => matches[key] === target);
                  
                  // If this target is already matched, remove that match
                  if (selectedSource) {
                    setMatches(prev => {
                      const newMatches = {...prev};
                      delete newMatches[selectedSource];
                      return newMatches;
                    });
                  }
                  
                  // Open dropdown to select source
                  const sourceToMatch = items
                    .map(item => item.source)
                    .filter(source => !matches[source])
                    .at(0);
                    
                  if (sourceToMatch) {
                    handleMatch(sourceToMatch, target);
                  }
                }
              }}
            >
              <p>{target}</p>
              {Object.entries(matches).map(([source, t]) => 
                t === target ? (
                  <div key={source} className="text-sm text-primary dark:text-primary-light mt-1">
                    Matched with: {source}
                  </div>
                ) : null
              )}
            </div>
          ))}
        </div>
      </div>
      
      {Object.keys(matches).length === items.length && !showFeedback && (
        <button 
          className="btn btn-primary"
          onClick={checkMatches}
        >
          Check Matches
        </button>
      )}
      
      {showFeedback && (
        <div className={`p-3 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'}`}>
          {isCorrect ? (
            <div className="flex items-start">
              <Check className="mr-2 flex-shrink-0 mt-1" size={16} />
              <p>Perfect! All matches are correct.</p>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              <div className="flex items-start">
                <AlertCircle className="mr-2 flex-shrink-0 mt-1" size={16} />
                <p>Some matches need correction. Here are the correct matches:</p>
              </div>
              <ul className="list-disc pl-8">
                {items.map((item, index) => (
                  <li key={index} className={matches[item.source] === item.target ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}>
                    <strong>{item.source}</strong> should match with <strong>{item.target}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <button 
            className="btn btn-outline mt-3"
            onClick={() => {
              setShowFeedback(false);
              setMatches({});
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

const exercises = {
  multipleChoice: MultipleChoice,
  fillInBlank: FillInBlank,
  matching: Matching
};

export default function Worksheet({ worksheetData }) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [scores, setScores] = useState([]);
  const [completed, setCompleted] = useState(false);
  
  const totalExercises = worksheetData.exercises.length;
  const currentExercise = worksheetData.exercises[currentExerciseIndex];
  
  const handleAnswer = (isCorrect) => {
    const newScores = [...scores];
    newScores[currentExerciseIndex] = isCorrect;
    setScores(newScores);
    
    // Automatically move to next question after 2 seconds
    setTimeout(() => {
      if (currentExerciseIndex < totalExercises - 1) {
        setCurrentExerciseIndex(prevIndex => prevIndex + 1);
      } else {
        setCompleted(true);
      }
    }, 2000);
  };
  
  const handleNext = () => {
    if (currentExerciseIndex < totalExercises - 1) {
      setCurrentExerciseIndex(prevIndex => prevIndex + 1);
    } else {
      setCompleted(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const resetWorksheet = () => {
    setCurrentExerciseIndex(0);
    setScores([]);
    setCompleted(false);
  };
  
  const correctAnswers = scores.filter(score => score === true).length;
  const progress = (currentExerciseIndex / totalExercises) * 100;
  
  // Render the current exercise
  const ExerciseComponent = exercises[currentExercise.type];
  
  return (
    <div className="bg-white dark:bg-surface-800 rounded-xl p-6 shadow-md">
      {!completed ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">{worksheetData.title}</h2>
              <span className="text-sm text-surface-500 dark:text-surface-400">
                Exercise {currentExerciseIndex + 1} of {totalExercises}
              </span>
            </div>
            
            <div className="worksheet-progress-bar">
              <div 
                className="worksheet-progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          <ExerciseComponent {...currentExercise.data} onAnswer={handleAnswer} />
          
          <div className="flex justify-between mt-6">
            <button
              className="btn btn-outline"
              onClick={handlePrevious}
              disabled={currentExerciseIndex === 0}
            >
              Previous
            </button>
            
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={scores[currentExerciseIndex] === undefined}
            >
              {currentExerciseIndex === totalExercises - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Worksheet Completed!</h2>
          
          <div className="mb-6">
            <div className="w-24 h-24 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-primary dark:text-primary-light">
                {Math.round((correctAnswers / totalExercises) * 100)}%
              </span>
            </div>
            
            <p className="text-lg">
              You got <span className="font-bold text-primary dark:text-primary-light">{correctAnswers}</span> out of <span className="font-bold">{totalExercises}</span> correct!
            </p>
          </div>
          
          <div className="space-y-4">
            <button 
              className="btn btn-primary w-full"
              onClick={resetWorksheet}
            >
              Try Again
            </button>
            
            {correctAnswers < totalExercises && (
              <div className="p-4 bg-surface-100 dark:bg-surface-700 rounded-lg text-left">
                <h3 className="font-bold mb-2 flex items-center">
                  <HelpCircle size={16} className="mr-2" />
                  Need to review?
                </h3>
                <p className="text-surface-600 dark:text-surface-300 text-sm">
                  Remember to practice these key points:
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                  {worksheetData.reviewTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}