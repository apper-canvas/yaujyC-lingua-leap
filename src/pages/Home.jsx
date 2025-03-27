import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, BookOpen, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react';
import MainFeature from '../components/MainFeature';

const languages = [
  { 
    id: 'french', 
    name: 'French', 
    flag: '🇫🇷',
    color: 'from-blue-500 to-red-500',
    learners: '24.3M',
    difficulty: 'Moderate'
  },
  { 
    id: 'spanish', 
    name: 'Spanish', 
    flag: '🇪🇸',
    color: 'from-yellow-500 to-red-600',
    learners: '32.1M',
    difficulty: 'Easy'
  },
  { 
    id: 'german', 
    name: 'German', 
    flag: '🇩🇪',
    color: 'from-yellow-500 to-black',
    learners: '18.7M',
    difficulty: 'Challenging'
  }
];

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Comprehensive Curriculum",
    description: "Structured lessons covering vocabulary, grammar, and cultural context"
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: "Conversation Practice",
    description: "Interactive dialogues with speech recognition for real-time feedback"
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "Personalized Assessments",
    description: "Adaptive quizzes and exercises that evolve with your progress"
  }
];

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const navigate = useNavigate();
  
  const handleStartLearning = (languageId, event) => {
    // Prevent the click from bubbling up to the card
    event.stopPropagation();
    // Navigate to the language page
    navigate(`/${languageId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Master New Languages <span className="text-gradient">Naturally</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-surface-600 dark:text-surface-300"
          >
            Learn French, Spanish, German and more with our interactive approach focused on real conversations, practical vocabulary, and cultural immersion.
          </motion.p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Globe className="mr-2 text-primary" /> 
            Choose Your Language
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language) => (
              <motion.div
                key={language.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedLanguage(language.id === selectedLanguage ? null : language.id)}
                className={`language-card card cursor-pointer ${language.id === selectedLanguage ? 'language-card-active' : ''}`}
              >
                <div className={`h-24 bg-gradient-to-r ${language.color} flex items-center justify-center`}>
                  <span className="text-5xl">{language.flag}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{language.name}</h3>
                  <div className="flex justify-between text-sm text-surface-500 dark:text-surface-400">
                    <span>{language.learners} learners</span>
                    <span>Difficulty: {language.difficulty}</span>
                  </div>
                  
                  <AnimatePresence>
                    {language.id === selectedLanguage && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-surface-200 dark:border-surface-700"
                      >
                        <button 
                          className="btn btn-primary w-full"
                          onClick={(e) => handleStartLearning(language.id, e)}
                        >
                          Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="h-12 w-12 rounded-full bg-primary-light/10 dark:bg-primary-dark/20 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-surface-600 dark:text-surface-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      <MainFeature />
    </div>
  );
}