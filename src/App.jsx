import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import French from './pages/French';
import Spanish from './pages/Spanish';
import German from './pages/German';
import LessonDetail from './pages/LessonDetail';
import TopicWorksheet from './pages/TopicWorksheet';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-surface-800/80 backdrop-blur-md border-b border-surface-200 dark:border-surface-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                LinguaLeap
              </span>
            </div>
            <Link to="/" className="text-surface-700 dark:text-surface-300 hover:text-primary dark:hover:text-primary-light transition-colors font-medium">
              Back to Home
            </Link>
          </div>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/french" element={<French />} />
          <Route path="/spanish" element={<Spanish />} />
          <Route path="/german" element={<German />} />
          <Route path="/french/lesson/:levelIndex/:lessonIndex" element={<LessonDetail language="French" flag="🇫🇷" color="from-blue-500 to-red-500" />} />
          <Route path="/spanish/lesson/:levelIndex/:lessonIndex" element={<LessonDetail language="Spanish" flag="🇪🇸" color="from-yellow-500 to-red-600" />} />
          <Route path="/german/lesson/:levelIndex/:lessonIndex" element={<LessonDetail language="German" flag="🇩🇪" color="from-yellow-500 to-black" />} />
          <Route path="/french/worksheet/:levelIndex/:lessonIndex/:topicIndex" element={<TopicWorksheet language="French" flag="🇫🇷" color="from-blue-500 to-red-500" />} />
          <Route path="/spanish/worksheet/:levelIndex/:lessonIndex/:topicIndex" element={<TopicWorksheet language="Spanish" flag="🇪🇸" color="from-yellow-500 to-red-600" />} />
          <Route path="/german/worksheet/:levelIndex/:lessonIndex/:topicIndex" element={<TopicWorksheet language="German" flag="🇩🇪" color="from-yellow-500 to-black" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="bg-surface-100 dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-surface-500 dark:text-surface-400 text-sm">
            © {new Date().getFullYear()} LinguaLeap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;