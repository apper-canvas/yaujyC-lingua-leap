import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronDown, BookOpen, CheckCircle, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CurriculumLayout({ language, flag, color, curriculum }) {
  const [expandedSection, setExpandedSection] = useState(0);
  const [expandedLesson, setExpandedLesson] = useState(null);

  const handleSectionToggle = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
    setExpandedLesson(null);
  };

  const handleLessonToggle = (sectionIndex, lessonIndex) => {
    setExpandedLesson(expandedLesson === `${sectionIndex}-${lessonIndex}` ? null : `${sectionIndex}-${lessonIndex}`);
  };

  const progressPercentage = 15; // This would be calculated based on user progress in a real app

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          to="/" 
          className="p-2 rounded-full bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors"
        >
          <ChevronLeft size={20} />
        </Link>
        <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-2xl`}>
          {flag}
        </div>
        <h1 className="text-3xl font-bold">{language} Curriculum</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {curriculum.map((section, sectionIndex) => (
            <div key={sectionIndex} className="card mb-6 overflow-hidden">
              <button
                className={`w-full p-5 flex items-center justify-between text-left ${sectionIndex === expandedSection ? 'bg-surface-100 dark:bg-surface-700' : ''}`}
                onClick={() => handleSectionToggle(sectionIndex)}
              >
                <div className="flex items-center gap-3">
                  {section.icon}
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform ${expandedSection === sectionIndex ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {expandedSection === sectionIndex && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-5 pt-0 border-t border-surface-200 dark:border-surface-700">
                    <p className="text-surface-600 dark:text-surface-300 mb-6">
                      {section.description}
                    </p>
                    
                    <div className="space-y-4">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div 
                          key={lessonIndex} 
                          className="border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden"
                        >
                          <button
                            className={`w-full p-4 flex items-center justify-between text-left hover:bg-surface-50 dark:hover:bg-surface-750 ${expandedLesson === `${sectionIndex}-${lessonIndex}` ? 'bg-surface-50 dark:bg-surface-750' : ''}`}
                            onClick={() => handleLessonToggle(sectionIndex, lessonIndex)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-primary-light/10 dark:bg-primary-dark/20 flex items-center justify-center">
                                <BookOpen className="h-4 w-4 text-primary" />
                              </div>
                              <h3 className="font-medium">{lesson.title}</h3>
                            </div>
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform ${expandedLesson === `${sectionIndex}-${lessonIndex}` ? 'rotate-180' : ''}`} 
                            />
                          </button>
                          
                          {expandedLesson === `${sectionIndex}-${lessonIndex}` && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-surface-200 dark:border-surface-700 p-4"
                            >
                              <div className="space-y-4">
                                <p className="text-surface-600 dark:text-surface-300">
                                  {lesson.description}
                                </p>
                                
                                {lesson.topics && (
                                  <div>
                                    <h4 className="font-medium mb-2">Topics covered:</h4>
                                    <ul className="space-y-2">
                                      {lesson.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex} className="flex items-start gap-2">
                                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                          <span>{topic}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                
                                {lesson.examples && (
                                  <div>
                                    <h4 className="font-medium mb-2">Examples:</h4>
                                    <div className="bg-surface-50 dark:bg-surface-700 p-3 rounded-lg">
                                      <ul className="space-y-1">
                                        {lesson.examples.map((example, exampleIndex) => (
                                          <li key={exampleIndex} className="flex flex-col">
                                            <span className="font-medium">{example.original}</span>
                                            <span className="text-surface-500 dark:text-surface-400 text-sm">
                                              {example.translation}
                                            </span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                )}
                                
                                <div className="pt-2 flex justify-end">
                                  <button className="btn btn-primary">
                                    Start Lesson
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="card p-5 sticky top-24">
            <h3 className="font-bold mb-4">Your Progress</h3>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Overall Completion</span>
                <span className="font-medium">{progressPercentage}%</span>
              </div>
              <div className="h-2 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-medium">3 Lessons Completed</div>
                  <div className="text-sm text-surface-500 dark:text-surface-400">Keep going!</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                  <Award className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <div className="font-medium">100 XP Earned</div>
                  <div className="text-sm text-surface-500 dark:text-surface-400">Level 2</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-medium">2 Day Streak</div>
                  <div className="text-sm text-surface-500 dark:text-surface-400">Last studied today</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-surface-200 dark:border-surface-700">
              <button className="btn btn-primary w-full mb-3">
                Continue Learning
              </button>
              <button className="btn btn-outline w-full">
                Take Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}