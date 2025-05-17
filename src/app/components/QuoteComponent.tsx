'use client';

import { useState, useEffect } from 'react';

interface Props {
  quotes: Quote[];
}

export default function QuoteComponent({ quotes }: Props) {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  useEffect(() => {
    if (quotes.length > 0) {
      showRandomQuote();
    }
  }, [quotes]);

  const showRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="p-6 bg-white rounded shadow text-center max-w-2xl mx-auto">
      {currentQuote && (
        <>
          <p className="text-xl font-medium italic mb-2">{currentQuote.quote}</p>
          <p className="text-sm text-gray-600 mb-4">- {currentQuote.author}</p>
        </>
      )}
      <button
        onClick={showRandomQuote}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Show Another Quote
      </button>
    </div>
  );
}
