import { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Copy } from 'lucide-react';

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
            {original.split(' ').map((word, index) => (
              <li key={index} className="flex justify-between">
                <span className="font-medium">{word}</span>
                <span className="text-surface-500 dark:text-surface-400">
                  {/* This would normally come from a dictionary API */}
                  {translation.split(' ')[Math.min(index, translation.split(' ').length - 1)]}
                </span>
              </li>
            ))}
          </ul>
          
          <h4 className="font-medium mt-4 mb-2">Grammar Note</h4>
          <p className="text-sm text-surface-600 dark:text-surface-300">
            This example demonstrates {language === 'French' ? 'French' : language === 'Spanish' ? 'Spanish' : 'German'} 
            {' '}{Math.random() > 0.5 ? 'verb conjugation' : 'sentence structure'} common in everyday conversation.
          </p>
        </div>
      )}
    </div>
  );
}