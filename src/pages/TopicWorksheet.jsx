import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';
import Worksheet from '../components/Worksheet';

// Import curriculum data
import { frenchCurriculum } from './French';
import { spanishCurriculum } from './Spanish';
import { germanCurriculum } from './German';

// Worksheet data generator based on language and topic
const generateWorksheetData = (language, topic, levelIndex, lessonIndex) => {
  // Base structure for the worksheets
  const baseWorksheet = {
    title: `${topic} Practice Worksheet`,
    description: `Practice your skills in ${topic} with these exercises.`,
    reviewTips: [
      "Review vocabulary regularly",
      "Practice pronunciation out loud",
      "Apply grammar rules to different contexts",
      "Use new vocabulary in sentences"
    ],
    exercises: []
  };

  // French worksheets
  const frenchWorksheets = {
    // Greetings and introductions
    greeting: {
      ...baseWorksheet,
      exercises: [
        {
          type: "multipleChoice",
          data: {
            question: "How do you say 'Good morning' in French?",
            options: ["Bon soir", "Bonjour", "Au revoir", "Merci"],
            correctAnswer: "Bonjour"
          }
        },
        {
          type: "fillInBlank",
          data: {
            sentence: "Pour se présenter, on dit: '[1] m'appelle [2].'",
            blanks: [1, 2],
            answers: ["Je", "Marie"] 
          }
        },
        {
          type: "matching",
          data: {
            items: [
              { source: "Bonjour", target: "Hello" },
              { source: "Comment allez-vous?", target: "How are you?" },
              { source: "Au revoir", target: "Goodbye" },
              { source: "Enchanté", target: "Nice to meet you" }
            ]
          }
        }
      ]
    },
    // Basic vocabulary
    vocabulary: {
      ...baseWorksheet,
      exercises: [
        {
          type: "multipleChoice",
          data: {
            question: "What is 'une pomme' in English?",
            options: ["A potato", "An apple", "A banana", "A pear"],
            correctAnswer: "An apple"
          }
        },
        {
          type: "fillInBlank",
          data: {
            sentence: "J'ai [1] chat et [2] chiens à la maison.",
            blanks: [1, 2],
            answers: ["un", "deux"]
          }
        },
        {
          type: "matching",
          data: {
            items: [
              { source: "la maison", target: "the house" },
              { source: "le livre", target: "the book" },
              { source: "la voiture", target: "the car" },
              { source: "le téléphone", target: "the phone" }
            ]
          }
        }
      ]
    },
    // Present tense
    present: {
      ...baseWorksheet,
      exercises: [
        {
          type: "multipleChoice",
          data: {
            question: "Which is the correct conjugation of 'parler' for 'je'?",
            options: ["parle", "parles", "parlons", "parlez"],
            correctAnswer: "parle"
          }
        },
        {
          type: "fillInBlank",
          data: {
            sentence: "Nous [1] au cinéma. Vous [2] à la maison.",
            blanks: [1, 2],
            answers: ["allons", "restez"]
          }
        },
        {
          type: "matching",
          data: {
            items: [
              { source: "je mange", target: "I eat" },
              { source: "tu parles", target: "you speak" },
              { source: "il dort", target: "he sleeps" },
              { source: "nous faisons", target: "we do/make" }
            ]
          }
        }
      ]
    }
  };

  // Spanish worksheets
  const spanishWorksheets = {
    // Greetings and introductions
    greeting: {
      ...baseWorksheet,
      exercises: [
        {
          type: "multipleChoice",
          data: {
            question: "How do you say 'Good afternoon' in Spanish?",
            options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hola"],
            correctAnswer: "Buenas tardes"
          }
        },
        {
          type: "fillInBlank",
          data: {
            sentence: "¡[1]! Me [2] Juan. ¿Cómo estás?",
            blanks: [1, 2],
            answers: ["Hola", "llamo"]
          }
        },
        {
          type: "matching",
          data: {
            items: [
              { source: "¿Cómo estás?", target: "How are you?" },
              { source: "Mucho gusto", target: "Nice to meet you" },
              { source: "¿De dónde eres?", target: "Where are you from?" },
              { source: "Hasta luego", target: "See you later" }
            ]
          }
        }
      ]
    },
    // Basic vocabulary
    vocabulary: {
      ...baseWorksheet,
      exercises: [
        {
          type: "multipleChoice",
          data: {
            question: "What is 'una manzana' in English?",
            options: ["A peach", "An orange", "An apple", "A melon"],
            correctAnswer: "An apple"
          }
        },
        {
          type: "fillInBlank",
          data: {
            sentence: "Tengo [1] perro y [2] gatos en casa.",
            blanks: [1, 2],
            answers: ["un", "dos"]
          }
        },
        {
          type: "matching",
          data: {
            items: [
              { source: "la casa", target: "the house" },
              { source: "el libro", target: "the book" },
              { source: "la mesa", target: "the table" },
              { source: "el teléfono", target: "the phone" }
            ]
          }
        }
      ]
    },
    // Present tense
    present: {
      ...baseWorksheet,
      exercises: [
        {
          type: "multipleChoice",
          data: {
            question: "Which is the correct conjugation of 'hablar' for 'yo'?",
            options: ["hablo", "hablas", "habla", "hablamos"],
            correctAnswer: "hablo"
          }
        },
        {
          type: "fillInBlank",
          data: {
            sentence: "Nosotros [1] al cine. Vosotros [2] en casa.",
            blanks: [1, 2],
            answers: ["vamos", "estáis"]
          }
        },
        {
          type: "matching",
          data: {
            items: [
              { source: "yo como", target: "I eat" },
              { source: "tú hablas", target: "you speak" },
              { source: "él duerme", target: "he sleeps" },
              { source: "nosotros hacemos", target: "we do/make" }
            ]
          }
        }
      ]
    }
  };

  // German worksheets
  const germanWorksheets = {
    // Greetings and introductions
    greeting: {
      ...baseWorksheet,
      exercises: [
        {
          type: "multipleChoice",
          data: {
            question: "How do you say 'Good evening' in German?",
            options: ["Guten Morgen", "Guten Tag", "Guten Abend", "Auf Wiedersehen"],
            correctAnswer: "Guten Abend"
          }
        },
        {
          type: "fillInBlank",
          data: {
            sentence: "[1] heiße Thomas. Wie [2] du?",
            blanks: [1, 2],
            answers: ["Ich", "heißt"]
          }
        },
        {
          type: "matching",
          data: {
            items: [
              { source: "Wie geht es Ihnen?", target: "How are you? (formal)" },
              { source: "Freut mich", target: "Nice to meet you" },
              { source: "Woher kommen Sie?", target: "Where are you from? (formal)" },
              { source: "Auf Wiedersehen", target: "Goodbye" }
            ]
          }
        }
      ]
    },
    // Basic vocabulary
    vocabulary: {
      ...baseWorksheet,
      exercises: [
        {
          type: "multipleChoice",
          data: {
            question: "What is 'ein Apfel' in English?",
            options: ["A potato", "An apple", "A banana", "A pear"],
            correctAnswer: "An apple"
          }
        },
        {
          type: "fillInBlank",
          data: {
            sentence: "Ich habe [1] Hund und [2] Katzen zu Hause.",
            blanks: [1, 2],
            answers: ["einen", "zwei"]
          }
        },
        {
          type: "matching",
          data: {
            items: [
              { source: "das Haus", target: "the house" },
              { source: "das Buch", target: "the book" },
              { source: "der Tisch", target: "the table" },
              { source: "das Telefon", target: "the phone" }
            ]
          }
        }
      ]
    },
    // Present tense
    present: {
      ...baseWorksheet,
      exercises: [
        {
          type: "multipleChoice",
          data: {
            question: "Which is the correct conjugation of 'sprechen' for 'ich'?",
            options: ["spreche", "sprichst", "spricht", "sprechen"],
            correctAnswer: "spreche"
          }
        },
        {
          type: "fillInBlank",
          data: {
            sentence: "Wir [1] ins Kino. Ihr [2] zu Hause.",
            blanks: [1, 2],
            answers: ["gehen", "bleibt"]
          }
        },
        {
          type: "matching",
          data: {
            items: [
              { source: "ich esse", target: "I eat" },
              { source: "du sprichst", target: "you speak" },
              { source: "er schläft", target: "he sleeps" },
              { source: "wir machen", target: "we do/make" }
            ]
          }
        }
      ]
    }
  };

  // Map common topics to specific worksheet keys
  const topicMap = {
    "Greetings and introductions": "greeting",
    "Basic vocabulary": "vocabulary",
    "Present tense verbs": "present",
    "Common phrases": "greeting",
    "Introducing yourself": "greeting",
    "Basic conversational phrases": "greeting",
    "Numbers and counting": "vocabulary",
    "Days of the week": "vocabulary",
    "Family members": "vocabulary",
    "Regular verbs": "present",
    "Verb conjugation": "present",
    "Simple present tense": "present"
  };

  // Select the appropriate worksheet based on language and topic
  let worksheetKey = "greeting"; // Default
  for (const [key, value] of Object.entries(topicMap)) {
    if (topic.includes(key) || topic.toLowerCase().includes(key.toLowerCase())) {
      worksheetKey = value;
      break;
    }
  }

  // Get the appropriate worksheet by language
  switch (language) {
    case "French":
      return frenchWorksheets[worksheetKey];
    case "Spanish":
      return spanishWorksheets[worksheetKey];
    case "German":
      return germanWorksheets[worksheetKey];
    default:
      return baseWorksheet;
  }
};

export default function TopicWorksheet({ language, flag, color }) {
  const { levelIndex, lessonIndex, topicIndex } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [level, setLevel] = useState(null);
  const [topic, setTopic] = useState("");
  const [worksheetData, setWorksheetData] = useState(null);
  
  // Get the appropriate curriculum and topic based on language
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
    
    if (curriculum.length > 0) {
      const currentLevel = curriculum[parseInt(levelIndex)] || null;
      setLevel(currentLevel);
      
      if (currentLevel && currentLevel.lessons) {
        const currentLesson = currentLevel.lessons[parseInt(lessonIndex)] || null;
        setLesson(currentLesson);
        
        if (currentLesson && currentLesson.topics && currentLesson.topics[parseInt(topicIndex)]) {
          const currentTopic = currentLesson.topics[parseInt(topicIndex)];
          setTopic(currentTopic);
          
          // Generate worksheet data
          const worksheetContent = generateWorksheetData(
            language, 
            currentTopic, 
            parseInt(levelIndex), 
            parseInt(lessonIndex)
          );
          setWorksheetData(worksheetContent);
        }
      }
    }
  }, [language, levelIndex, lessonIndex, topicIndex]);

  if (!lesson || !level || !topic) {
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Worksheet not found</h1>
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
          onClick={() => navigate(`/${language.toLowerCase()}/lesson/${levelIndex}/${lessonIndex}`)}
          className="flex items-center hover:text-primary dark:hover:text-primary-light transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Lesson
        </button>
        <span className="mx-2">/</span>
        <span>{level.title}</span>
        <span className="mx-2">/</span>
        <span>{lesson.title}</span>
        <span className="mx-2">/</span>
        <span className="text-surface-800 dark:text-surface-200 font-medium">{topic}</span>
      </div>

      {/* Worksheet Header */}
      <div className={`bg-gradient-to-r ${color} p-6 rounded-2xl text-white mb-8`}>
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-4">{flag}</span>
          <h1 className="text-3xl font-bold">{topic}</h1>
        </div>
        <p className="text-lg opacity-90 mb-4">
          Practice your {language} skills with these interactive exercises focused on {topic.toLowerCase()}.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to={`/${language.toLowerCase()}/lesson/${levelIndex}/${lessonIndex}`}
            className="bg-white/20 backdrop-blur-sm py-2 px-4 rounded-lg font-medium flex items-center"
          >
            <BookOpen size={18} className="mr-2" /> Back to Lesson Materials
          </Link>
        </div>
      </div>

      {/* Worksheet Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Worksheet Component */}
          {worksheetData && <Worksheet worksheetData={worksheetData} />}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* About This Worksheet */}
          <div className="card p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">About This Worksheet</h3>
            <p className="text-surface-600 dark:text-surface-300 mb-4">
              This interactive worksheet is designed to help you practice your {language} skills related to {topic.toLowerCase()}. 
              Complete the exercises to reinforce your learning.
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium">Multiple Choice</h4>
                  <p className="text-sm text-surface-500 dark:text-surface-400">
                    Test your knowledge with carefully designed questions
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium">Fill in the Blanks</h4>
                  <p className="text-sm text-surface-500 dark:text-surface-400">
                    Practice vocabulary and grammar by completing sentences
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium">Matching Exercises</h4>
                  <p className="text-sm text-surface-500 dark:text-surface-400">
                    Connect words and phrases with their meanings
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Tips */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Learning Tips</h3>
            <ul className="space-y-3">
              <li className="p-3 bg-surface-50 dark:bg-surface-700 rounded-lg">
                <h4 className="font-medium">Repeat Out Loud</h4>
                <p className="text-sm text-surface-600 dark:text-surface-300">
                  Saying words aloud helps with pronunciation and memory retention.
                </p>
              </li>
              <li className="p-3 bg-surface-50 dark:bg-surface-700 rounded-lg">
                <h4 className="font-medium">Practice Daily</h4>
                <p className="text-sm text-surface-600 dark:text-surface-300">
                  Even 10 minutes of daily practice is more effective than cramming.
                </p>
              </li>
              <li className="p-3 bg-surface-50 dark:bg-surface-700 rounded-lg">
                <h4 className="font-medium">Use in Context</h4>
                <p className="text-sm text-surface-600 dark:text-surface-300">
                  Try to create your own sentences using the vocabulary and grammar.
                </p>
              </li>
              <li className="p-3 bg-surface-50 dark:bg-surface-700 rounded-lg">
                <h4 className="font-medium">Embrace Mistakes</h4>
                <p className="text-sm text-surface-600 dark:text-surface-300">
                  Mistakes are part of learning. Use them as opportunities to improve.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}