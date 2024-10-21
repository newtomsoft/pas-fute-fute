import { sample } from 'lodash-es';

const quotes = [
  'C\'est pas le pingouin qui glisse le plus loin',
  'Il n\'a pas inventé la poudre',
  'Il n\'a pas inventé l\'eau chaude',
  'Il n\'a pas inventé le fil à couper le beurre',
  'T\'es pas la carpe la plus oxygénée de la rivière.',
  'Bête à manger du foin',
  'C\'est pas la personne la plus conne du monde, mais il faudrait pas que l\'autre meure',
];

export function GET() {
  return {
    quote: sample(quotes),
  };
}
