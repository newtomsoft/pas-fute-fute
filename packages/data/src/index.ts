import { shuffle } from 'lodash-es';
import { quotes } from './quotes.yaml';

export { createUniqueRandomQuoteGenerator, getRandomQuote, getUniqueRandomQuote, quotes };

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function createUniqueRandomQuoteGenerator() {
  let shuffledQuotes = shuffle(quotes);

  return function getUniqueRandomQuote() {
    if (shuffledQuotes.length === 0) {
      shuffledQuotes = shuffle(quotes);
    }

    return shuffledQuotes.pop();
  };
}

const getUniqueRandomQuote = createUniqueRandomQuoteGenerator();
