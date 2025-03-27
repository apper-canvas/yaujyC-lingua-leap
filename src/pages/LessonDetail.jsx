import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Play, Volume2, BookOpen, CheckSquare, Download, Share2 } from 'lucide-react';
import ExampleCard from '../components/ExampleCard';
import LessonNavigation from '../components/LessonNavigation';

// Import curriculum data
import { frenchCurriculum } from './French';
import { spanishCurriculum } from './Spanish';
import { germanCurriculum } from './German';

export default function LessonDetail({ language, flag, color }) {
  const { levelIndex, lessonIndex } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [level, setLevel] = useState(null);
  const [curriculumData, setCurriculumData] = useState([]);
  
  // Get the appropriate curriculum based on language
  useEffect(() => {
    let curriculum;
    switch (language) {
      case 'French':
        curriculum = frenchCurriculum;
        break;
      case 'Spanish':
        curriculum = spanishCurriculum;
        break;
      case 'German':
        curriculum = germanCurriculum;
        break;
      default:
        curriculum = [];
    }
    setCurriculumData(curriculum);
    
    if (curriculum.length > 0) {
      const currentLevel = curriculum[parseInt(levelIndex)] || null;
      setLevel(currentLevel);
      
      if (currentLevel && currentLevel.lessons) {
        const currentLesson = currentLevel.lessons[parseInt(lessonIndex)] || null;
        setLesson(currentLesson);
      }
    }
  }, [language, levelIndex, lessonIndex]);

  if (!lesson || !level) {
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <Link to={`/${language.toLowerCase()}`} className="btn btn-primary">
            Back to {language} Curriculum
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="mb-6 flex items-center text-sm text-surface-500 dark:text-surface-400">
        <button 
          onClick={() => navigate(`/${language.toLowerCase()}`)}
          className="flex items-center hover:text-primary dark:hover:text-primary-light transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to {language} Curriculum
        </button>
        <span className="mx-2">/</span>
        <span>{level.title}</span>
        <span className="mx-2">/</span>
        <span className="text-surface-800 dark:text-surface-200 font-medium">{lesson.title}</span>
      </div>

      {/* Lesson Header */}
      <div className={`bg-gradient-to-r ${color} p-6 rounded-2xl text-white mb-8`}>
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-4">{flag}</span>
          <h1 className="text-3xl font-bold">{lesson.title}</h1>
        </div>
        <p className="text-lg opacity-90 mb-4">{lesson.description}</p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-surface-800 py-2 px-4 rounded-lg font-medium flex items-center">
            <Play size={18} className="mr-2" /> Start Lesson
          </button>
          <button className="bg-white/20 backdrop-blur-sm py-2 px-4 rounded-lg font-medium flex items-center">
            <BookOpen size={18} className="mr-2" /> Lesson Materials
          </button>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Topics Section */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
            <ul className="space-y-3">
              {lesson.topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <CheckSquare size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples Section */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Examples</h2>
            <div className="space-y-4">
              {lesson.examples.map((example, index) => (
                <ExampleCard 
                  key={index}
                  original={example.original}
                  translation={example.translation}
                  language={language}
                />
              ))}
            </div>
          </div>

          {/* Practice Exercise */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Practice Exercise</h2>
            <p className="mb-4 text-surface-600 dark:text-surface-300">Reinforce what you've learned with these interactive exercises.</p>
            
            <div className="bg-surface-50 dark:bg-surface-700 p-5 rounded-xl mb-4">
              <h3 className="font-bold mb-3">Complete the phrases:</h3>
              <div className="space-y-4">
                {lesson.examples.slice(0, 2).map((example, index) => (
                  <div key={index} className="border border-surface-200 dark:border-surface-600 rounded-lg p-4 bg-white dark:bg-surface-800">
                    <p className="mb-2">{example.translation}</p>
                    <div className="flex items-center">
                      <input 
                        type="text" 
                        placeholder="Type your answer..." 
                        className="input text-surface-800 dark:text-white"
                      />
                      <button className="ml-3 text-primary hover:text-primary-dark">
                        <Volume2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 btn btn-primary">Check Answers</button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Lesson Resources */}
          <div className="card p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Lesson Resources</h3>
            <ul className="space-y-3">
              <li>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors">
                  <span className="flex items-center">
                    <Download size={18} className="mr-3 text-primary" />
                    Vocabulary List
                  </span>
                  <span className="text-xs bg-surface-100 dark:bg-surface-700 px-2 py-1 rounded">PDF</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors">
                  <span className="flex items-center">
                    <Download size={18} className="mr-3 text-primary" />
                    Grammar Notes
                  </span>
                  <span className="text-xs bg-surface-100 dark:bg-surface-700 px-2 py-1 rounded">PDF</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors">
                  <span className="flex items-center">
                    <Play size={18} className="mr-3 text-primary" />
                    Audio Pronunciation
                  </span>
                  <span className="text-xs bg-surface-100 dark:bg-surface-700 px-2 py-1 rounded">MP3</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Share */}
          <div className="card p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Share this Lesson</h3>
            <div className="flex space-x-2">
              <button className="p-3 rounded-lg bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors">
                <Share2 size={20} />
              </button>
              <input 
                type="text" 
                readOnly 
                value={window.location.href} 
                className="input text-sm"
                onClick={(e) => e.target.select()}
              />
            </div>
          </div>

          {/* Related Lessons */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Related Lessons</h3>
            <ul className="space-y-3">
              {level.lessons.filter((_, i) => i !== parseInt(lessonIndex)).slice(0, 3).map((relatedLesson, index) => (
                <li key={index}>
                  <Link 
                    to={`/${language.toLowerCase()}/lesson/${levelIndex}/${level.lessons.findIndex(l => l.title === relatedLesson.title)}`}
                    className="block p-3 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
                  >
                    <h4 className="font-medium">{relatedLesson.title}</h4>
                    <p className="text-sm text-surface-500 dark:text-surface-400 truncate">{relatedLesson.description.substring(0, 60)}...</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lesson Navigation */}
      <LessonNavigation 
        language={language}
        levelIndex={parseInt(levelIndex)}
        lessonIndex={parseInt(lessonIndex)}
        curriculumData={curriculumData}
      />
    </div>
  );
}