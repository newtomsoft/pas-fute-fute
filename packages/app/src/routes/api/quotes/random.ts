import { getRandomQuote } from '@pas-fute-fute/data';

export function GET() {
  return {
    ...getRandomQuote(),
  };
}
