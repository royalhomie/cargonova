import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const NavigationArrows: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-8 bottom-32 z-50 flex flex-col gap-4">
      <button
        onClick={scrollToTop}
        className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
      <button
        onClick={scrollToBottom}
        className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-1"
        aria-label="Scroll to bottom"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </div>
  );
};

export default NavigationArrows;