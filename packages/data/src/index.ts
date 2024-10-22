import uniqueRandomArray from 'unique-random-array';
import { quotes } from './quotes.yaml';

export { getRandomQuote, getUniqueRandomQuote, quotes };

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getUniqueRandomQuote = uniqueRandomArray(quotes);
