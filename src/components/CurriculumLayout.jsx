import { useState } from 'react';
import { motion } from 'framer-motion';
import LessonCard from './LessonCard';

export default function CurriculumLayout({ language, flag, color, curriculum }) {
  const [activeLevel, setActiveLevel] = useState(0);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className={`bg-gradient-to-r ${color} rounded-2xl p-8 mb-8 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 opacity-10 text-9xl">
          {flag}
        </div>
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">{flag}</span>
            <h1 className="text-4xl font-bold">{language}</h1>
          </div>
          <p className="text-lg max-w-2xl">
            Explore our comprehensive {language} curriculum designed to take you from beginner 
            to fluency. Choose a level to begin your language journey.
          </p>
        </div>
      </div>
      
      {/* Level Tabs */}
      <div className="mb-8 flex flex-wrap gap-3">
        {curriculum.map((level, index) => (
          <button
            key={index}
            onClick={() => setActiveLevel(index)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeLevel === index
                ? 'bg-primary text-white'
                : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'
            }`}
          >
            {level.title}
          </button>
        ))}
      </div>
      
      {/* Active Level Content */}
      <motion.div 
        key={activeLevel}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="mb-6">
          <div className="flex items-center mb-4">
            {curriculum[activeLevel].icon}
            <h2 className="text-2xl font-bold ml-3">{curriculum[activeLevel].title}</h2>
          </div>
          <p className="text-surface-600 dark:text-surface-300">
            {curriculum[activeLevel].description}
          </p>
        </div>
        
        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculum[activeLevel].lessons.map((lesson, lessonIndex) => (
            <LessonCard 
              key={lessonIndex}
              lesson={lesson}
              levelIndex={activeLevel}
              lessonIndex={lessonIndex}
              language={language}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}