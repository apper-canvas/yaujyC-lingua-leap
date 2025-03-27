import { useNavigate } from 'react-router-dom';
import { Clock, Book, Award } from 'lucide-react';

export default function LessonCard({ lesson, levelIndex, lessonIndex, language, active = false }) {
  const navigate = useNavigate();
  
  // Calculate estimated time based on content length (just for demonstration)
  const estimatedMinutes = 5 + (lesson.topics.length * 3) + (lesson.examples.length * 2);
  
  // Difficulty level based on position in curriculum (just for demonstration)
  const difficultyLevels = ['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert'];
  const difficulty = difficultyLevels[Math.min(lessonIndex, 4)];
  
  // Progress (would come from user data in a real app)
  const progress = Math.floor(Math.random() * 101); // 0-100%
  
  const handleClick = () => {
    navigate(`/${language.toLowerCase()}/lesson/${levelIndex}/${lessonIndex}`);
  };
  
  return (
    <div 
      className={`card p-5 cursor-pointer hover:shadow-md transition-all duration-300 ${active ? 'ring-2 ring-primary dark:ring-primary-light' : ''}`}
      onClick={handleClick}
    >
      <h3 className="font-bold text-xl mb-2">{lesson.title}</h3>
      <p className="text-surface-600 dark:text-surface-300 text-sm mb-4 line-clamp-2">{lesson.description}</p>
      
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="inline-flex items-center text-xs bg-surface-100 dark:bg-surface-700 px-2 py-1 rounded">
          <Clock size={14} className="mr-1" />
          {estimatedMinutes} min
        </span>
        <span className="inline-flex items-center text-xs bg-surface-100 dark:bg-surface-700 px-2 py-1 rounded">
          <Book size={14} className="mr-1" />
          {lesson.topics.length} topics
        </span>
        <span className="inline-flex items-center text-xs bg-surface-100 dark:bg-surface-700 px-2 py-1 rounded">
          <Award size={14} className="mr-1" />
          {difficulty}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-1 text-xs text-right text-surface-500 dark:text-surface-400">
        {progress}% complete
      </div>
    </div>
  );
}