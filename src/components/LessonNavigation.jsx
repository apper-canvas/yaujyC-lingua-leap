import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function LessonNavigation({ language, levelIndex, lessonIndex, curriculumData }) {
  const navigate = useNavigate();
  
  // Get current level data
  const currentLevel = curriculumData[levelIndex] || null;
  
  // Determine if there's a previous lesson in the same level
  const hasPrevLesson = lessonIndex > 0;
  const prevLessonIndex = hasPrevLesson ? lessonIndex - 1 : null;
  const prevLesson = hasPrevLesson && currentLevel ? currentLevel.lessons[prevLessonIndex] : null;
  
  // Determine if there's a next lesson in the same level
  const hasNextLesson = currentLevel && lessonIndex < currentLevel.lessons.length - 1;
  const nextLessonIndex = hasNextLesson ? lessonIndex + 1 : null;
  const nextLesson = hasNextLesson && currentLevel ? currentLevel.lessons[nextLessonIndex] : null;
  
  // Determine if there's a first lesson in the next level
  const hasNextLevel = levelIndex < curriculumData.length - 1;
  const nextLevel = hasNextLevel ? curriculumData[levelIndex + 1] : null;
  const firstLessonNextLevel = nextLevel && nextLevel.lessons.length > 0 ? nextLevel.lessons[0] : null;
  
  const goToPrevLesson = () => {
    if (hasPrevLesson) {
      navigate(`/${language.toLowerCase()}/lesson/${levelIndex}/${prevLessonIndex}`);
    }
  };
  
  const goToNextLesson = () => {
    if (hasNextLesson) {
      navigate(`/${language.toLowerCase()}/lesson/${levelIndex}/${nextLessonIndex}`);
    } else if (hasNextLevel && firstLessonNextLevel) {
      navigate(`/${language.toLowerCase()}/lesson/${levelIndex + 1}/0`);
    }
  };
  
  const getNextButtonText = () => {
    if (hasNextLesson) {
      return "Next Lesson";
    } else if (hasNextLevel && firstLessonNextLevel) {
      return `Start ${nextLevel.title}`;
    }
    return "Complete";
  };
  
  return (
    <div className="mt-10 border-t border-surface-200 dark:border-surface-700 pt-6">
      <div className="flex justify-between">
        <button
          onClick={goToPrevLesson}
          disabled={!hasPrevLesson}
          className={`flex items-center p-3 rounded-lg ${
            hasPrevLesson 
              ? 'hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-800 dark:text-surface-200' 
              : 'text-surface-400 dark:text-surface-600 cursor-not-allowed'
          }`}
        >
          <ArrowLeft size={20} className="mr-2" />
          <div className="text-left">
            <div className="text-xs text-surface-500 dark:text-surface-400">Previous</div>
            <div className="font-medium">
              {prevLesson ? prevLesson.title : 'No previous lesson'}
            </div>
          </div>
        </button>
        
        <button
          onClick={goToNextLesson}
          disabled={!hasNextLesson && (!hasNextLevel || !firstLessonNextLevel)}
          className={`flex items-center p-3 rounded-lg ${
            (hasNextLesson || (hasNextLevel && firstLessonNextLevel))
              ? 'hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-800 dark:text-surface-200' 
              : 'text-surface-400 dark:text-surface-600 cursor-not-allowed'
          }`}
        >
          <div className="text-right">
            <div className="text-xs text-surface-500 dark:text-surface-400">Next</div>
            <div className="font-medium">
              {getNextButtonText()}
            </div>
          </div>
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
}