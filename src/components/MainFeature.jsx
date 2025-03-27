import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Volume2, Repeat, ArrowRight, Award } from 'lucide-react';

// Sample vocabulary data
const vocabularyData = {
  french: [
    { word: 'Bonjour', translation: 'Hello', example: 'Bonjour, comment ça va?' },
    { word: 'Merci', translation: 'Thank you', example: 'Merci beaucoup pour votre aide.' },
    { word: 'Au revoir', translation: 'Goodbye', example: 'Au revoir, à demain!' },
    { word: 'S\'il vous plaît', translation: 'Please', example: 'Un café, s\'il vous plaît.' },
    { word: 'Excusez-moi', translation: 'Excuse me', example: 'Excusez-moi, où est la gare?' }
  ],
  spanish: [
    { word: 'Hola', translation: 'Hello', example: '¡Hola! ¿Cómo estás?' },
    { word: 'Gracias', translation: 'Thank you', example: 'Muchas gracias por tu ayuda.' },
    { word: 'Adiós', translation: 'Goodbye', example: 'Adiós, hasta mañana!' },
    { word: 'Por favor', translation: 'Please', example: 'Un café, por favor.' },
    { word: 'Disculpe', translation: 'Excuse me', example: 'Disculpe, ¿dónde está la estación?' }
  ],
  german: [
    { word: 'Hallo', translation: 'Hello', example: 'Hallo, wie geht es dir?' },
    { word: 'Danke', translation: 'Thank you', example: 'Vielen Danke für deine Hilfe.' },
    { word: 'Auf Wiedersehen', translation: 'Goodbye', example: 'Auf Wiedersehen, bis morgen!' },
    { word: 'Bitte', translation: 'Please', example: 'Ein Kaffee, bitte.' },
    { word: 'Entschuldigung', translation: 'Excuse me', example: 'Entschuldigung, wo ist der Bahnhof?' }
  ]
};

export default function MainFeature() {
  const [selectedLanguage, setSelectedLanguage] = useState('french');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const currentWord = vocabularyData[selectedLanguage][currentIndex];
  
  useEffect(() => {
    // Reset states when language changes
    setCurrentIndex(0);
    setShowTranslation(false);
    setUserInput('');
    setResult(null);
  }, [selectedLanguage]);
  
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  
  const handleCheck = () => {
    const isCorrect = userInput.trim().toLowerCase() === currentWord.translation.toLowerCase();
    setResult(isCorrect);
    
    if (isCorrect) {
      setScore(score + 10);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };
  
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % vocabularyData[selectedLanguage].length;
    setCurrentIndex(nextIndex);
    setUserInput('');
    setResult(null);
    setShowTranslation(false);
    setIsFlipped(false);
  };
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const playAudio = () => {
    // In a real app, this would play the pronunciation audio
    // For this MVP, we'll just show an alert
    alert(`Playing pronunciation for: ${currentWord.word}`);
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-gradient">Vocabulary Trainer</span>
        </h2>
        <p className="text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
          Master essential vocabulary through our interactive flashcard system. 
          Test your knowledge, track your progress, and build your language skills one word at a time.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8 space-x-4">
          {Object.keys(vocabularyData).map((language) => (
            <motion.button
              key={language}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageChange(language)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedLanguage === language 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'
              }`}
            >
              {language.charAt(0).toUpperCase() + language.slice(1)}
            </motion.button>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary-light/20 dark:bg-primary-dark/30 flex items-center justify-center">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Score: {score}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Repeat className="h-4 w-4 text-secondary-dark" />
                </div>
                <span className="font-medium">Streak: {streak}</span>
              </div>
            </div>
            
            <div className="relative perspective-1000 h-64 mb-6">
              <motion.div 
                className="absolute inset-0 card p-6 flex flex-col items-center justify-center cursor-pointer"
                animate={{ 
                  rotateY: isFlipped ? 180 : 0,
                  zIndex: isFlipped ? 0 : 1
                }}
                transition={{ duration: 0.6 }}
                onClick={handleFlip}
              >
                <div className="text-3xl font-bold mb-4">{currentWord.word}</div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio();
                  }}
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Volume2 className="h-6 w-6 text-primary" />
                </button>
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 card p-6 flex flex-col items-center justify-center cursor-pointer"
                animate={{ 
                  rotateY: isFlipped ? 0 : -180,
                  zIndex: isFlipped ? 1 : 0
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                onClick={handleFlip}
              >
                <div className="text-xl font-medium mb-2">Translation</div>
                <div className="text-3xl font-bold mb-4">{currentWord.translation}</div>
                <div className="text-sm text-surface-500 dark:text-surface-400 text-center">
                  {currentWord.example}
                </div>
              </motion.div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="translation" className="block text-sm font-medium mb-2">
                Your translation:
              </label>
              <input
                type="text"
                id="translation"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type the English translation..."
                className="input"
                disabled={result !== null}
              />
            </div>
            
            <AnimatePresence>
              {result !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`p-4 rounded-xl mb-4 ${
                    result ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 
                    'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                  }`}
                >
                  <div className="flex items-center">
                    {result ? (
                      <Check className="h-5 w-5 mr-2" />
                    ) : (
                      <X className="h-5 w-5 mr-2" />
                    )}
                    <span>
                      {result 
                        ? "Correct! Well done!" 
                        : `Incorrect. The correct translation is "${currentWord.translation}".`}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex gap-3">
              {result === null ? (
                <button 
                  onClick={handleCheck}
                  disabled={!userInput.trim()}
                  className="btn btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Check Answer
                </button>
              ) : (
                <button 
                  onClick={handleNext}
                  className="btn btn-primary flex-1"
                >
                  Next Word <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              )}
              
              <button 
                onClick={() => setShowTranslation(!showTranslation)}
                className="btn btn-outline"
              >
                {showTranslation ? "Hide" : "Show"} Translation
              </button>
            </div>
            
            <AnimatePresence>
              {showTranslation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 bg-surface-100 dark:bg-surface-700 rounded-xl"
                >
                  <div className="font-medium">Translation: {currentWord.translation}</div>
                  <div className="text-sm text-surface-500 dark:text-surface-400 mt-1">
                    Example: {currentWord.example}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="md:w-64">
            <div className="card p-4">
              <h3 className="font-bold mb-3">Word List</h3>
              <ul className="space-y-2">
                {vocabularyData[selectedLanguage].map((item, index) => (
                  <li 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`p-2 rounded-lg cursor-pointer transition-colors ${
                      currentIndex === index 
                        ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light font-medium' 
                        : 'hover:bg-surface-100 dark:hover:bg-surface-700'
                    }`}
                  >
                    {item.word}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}