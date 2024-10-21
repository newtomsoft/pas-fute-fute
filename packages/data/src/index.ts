import { quotes } from './quotes.yaml';

export { getRandomQuote, quotes };

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
