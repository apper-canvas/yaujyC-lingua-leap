import { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Copy } from 'lucide-react';

// Helper function to get more accurate word translations
const getWordTranslations = (original, translation, language) => {
  // This could be expanded with a more sophisticated dictionary
  // Here we're providing basic mappings for common words in each language
  const words = original.split(' ');

  // Basic dictionaries by language
  const frenchDict = {
    'Bonjour': 'Hello',
    'comment': 'how',
    'allez-vous': 'are you',
    'Je': 'I',
    "m'appelle": 'name is',
    'Et': 'And',
    'vous': 'you',
    'Enchanté': 'Pleased',
    'de': 'to',
    'faire': 'make',
    'votre': 'your',
    'connaissance': 'acquaintance',
    'Le': 'The',
    'livre': 'book',
    'est': 'is',
    'sur': 'on',
    'la': 'the',
    'table': 'table',
    'J\'ai': 'I have',
    'un': 'a',
    'stylo': 'pen',
    'et': 'and',
    'une': 'a',
    'gomme': 'eraser',
    'Les': 'The',
    'enfants': 'children',
    'jouent': 'play',
    'dans': 'in',
    'le': 'the',
    'parc': 'park',
    'parle': 'speak',
    'français': 'French',
    'Nous': 'We',
    'finissons': 'finish',
    'nos': 'our',
    'devoirs': 'homework',
    'Ils': 'They',
    'ne': 'not',
    'vendent': 'sell',
    'pas': 'not',
    'leurs': 'their',
    'livres': 'books',
    'prends': 'take',
    'café': 'coffee',
    'au': 'with',
    'lait': 'milk',
    's\'il': 'if',
    'vous': 'you',
    'plaît': 'please',
    'Combien': 'How much',
    'coûte': 'costs',
    'cette': 'this',
    'chemise': 'shirt',
    'me': 'myself',
    'réveille': 'wake up',
    'à': 'at',
    'sept': 'seven',
    'heures': 'hours',
    'tous': 'all',
    'les': 'the',
    'jours': 'days'
  };
  
  const spanishDict = {
    '¡Hola!': 'Hello!',
    '¿Cómo': 'How',
    'estás?': 'are you?',
    'Me': 'My',
    'llamo': 'name is',
    'Carlos': 'Carlos',
    '¿Y': 'And',
    'tú?': 'you?',
    'Mucho': 'Much',
    'gusto': 'pleasure',
    'en': 'in',
    'conocerte': 'meeting you',
    'El': 'The',
    'libro': 'book',
    'está': 'is',
    'en': 'on',
    'la': 'the',
    'mesa': 'table',
    'Tengo': 'I have',
    'unos': 'some',
    'lápices': 'pencils',
    'y': 'and',
    'unas': 'some',
    'plumas': 'pens',
    'Las': 'The',
    'mujeres': 'women',
    'hablan': 'talk',
    'con': 'with',
    'los': 'the',
    'hombres': 'men',
    'Yo': 'I',
    'hablo': 'speak',
    'español': 'Spanish',
    'Ellos': 'They',
    'comen': 'eat',
    'el': 'the',
    'restaurante': 'restaurant',
    '¿Tú': 'You',
    'no': 'not',
    'vives': 'live',
    'aquí?': 'here?',
    'Quisiera': 'I would like',
    'un': 'a',
    'café': 'coffee',
    'con': 'with',
    'leche': 'milk',
    'por': 'please',
    'favor': 'please',
    '¿Cuánto': 'How much',
    'cuesta': 'costs',
    'esta': 'this',
    'camisa?': 'shirt?',
    'Mi': 'My',
    'hermana': 'sister',
    'es': 'is',
    'alta': 'tall',
    'y': 'and',
    'delgada': 'thin'
  };
  
  const germanDict = {
    'Guten': 'Good',
    'Tag!': 'day!',
    'Wie': 'How',
    'geht': 'goes',
    'es': 'it',
    'Ihnen?': 'you? (formal)',
    'Ich': 'I',
    'heiße': 'am called',
    'Thomas': 'Thomas',
    'Und': 'And',
    'du?': 'you? (informal)',
    'Freut': 'Pleases',
    'mich': 'me',
    'Sie': 'you (formal)',
    'kennenzulernen': 'to meet',
    'Der': 'The',
    'Mann': 'man',
    'liest': 'reads',
    'ein': 'a',
    'Buch': 'book',
    'Die': 'The',
    'Frau': 'woman',
    'kauft': 'buys',
    'eine': 'a',
    'Tasche': 'bag',
    'Das': 'The',
    'Kind': 'child',
    'spielt': 'plays',
    'mit': 'with',
    'dem': 'the',
    'Ball': 'ball',
    'lerne': 'learn',
    'Deutsch': 'German',
    'Er': 'He',
    'fährt': 'goes',
    'nach': 'to',
    'Berlin': 'Berlin',
    'Wir': 'We',
    'können': 'can',
    'heute': 'today',
    'nicht': 'not',
    'kommen': 'come',
    'hätte': 'would have',
    'gerne': 'gladly',
    'einen': 'a',
    'Kaffee': 'coffee',
    'bitte': 'please',
    'viel': 'much',
    'kostet': 'costs',
    'dieser': 'this',
    'Pullover?': 'sweater?',
    'Meine': 'My',
    'Familie': 'family',
    'wohnt': 'lives',
    'in': 'in',
    'München': 'Munich'
  };
  
  // Choose the appropriate dictionary based on language
  let dict;
  switch(language) {
    case 'French':
      dict = frenchDict;
      break;
    case 'Spanish':
      dict = spanishDict;
      break;
    case 'German':
      dict = germanDict;
      break;
    default:
      dict = {};
  }
  
  // Map each word to its translation or show the original if not found
  return words.map(word => {
    // Remove punctuation for dictionary lookup
    const cleanWord = word.replace(/[.,?!;:""''()]/g, '');
    const translation = dict[cleanWord] || dict[word] || "[translation]";
    
    // Return both the original word (with punctuation) and its translation
    return {
      original: word,
      translation: translation
    };
  });
};

export default function ExampleCard({ original, translation, language }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  return (
    <div className="border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden">
      <div className="p-4 bg-surface-50 dark:bg-surface-700">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <p className="text-lg font-medium">{original}</p>
              <button 
                className="ml-2 p-1 rounded-full hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors"
                aria-label="Listen to pronunciation"
              >
                <Volume2 size={16} />
              </button>
              <button 
                className="ml-1 p-1 rounded-full hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors"
                onClick={() => copyToClipboard(original)}
                aria-label="Copy to clipboard"
              >
                <Copy size={16} />
                {isCopied && <span className="absolute bg-surface-800 text-white text-xs px-2 py-1 rounded ml-2">Copied!</span>}
              </button>
            </div>
            <p className="text-surface-600 dark:text-surface-300">{translation}</p>
          </div>
          <button 
            className="p-1 rounded-full hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Show less" : "Show more"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 bg-white dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700">
          <h4 className="font-medium mb-2">Breakdown</h4>
          <ul className="space-y-2 text-sm">
            {getWordTranslations(original, translation, language).map((wordPair, index) => (
              <li key={index} className="flex justify-between">
                <span className="font-medium">{wordPair.original}</span>
                <span className="text-surface-500 dark:text-surface-400">
                  {wordPair.translation}
                </span>
              </li>
            ))}
          </ul>
          
          <h4 className="font-medium mt-4 mb-2">Grammar Note</h4>
          <p className="text-sm text-surface-600 dark:text-surface-300">
            This example demonstrates {language} 
            {' '}{Math.random() > 0.5 ? 'verb conjugation' : 'sentence structure'} common in everyday conversation.
          </p>
        </div>
      )}
    </div>
  );
}