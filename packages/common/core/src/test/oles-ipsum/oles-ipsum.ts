import {
  LOREM_IPSUM_CARRIAGE_RETURN,
  LOREM_IPSUM_KEYWORDS,
  LOREM_IPSUM_PUNCTUATION,
  OLES_IPSUM_START,
  OVHCLOUD_KEYWORDS,
} from './oles-ipsum.constants';
import { OlesIpsumGeneration } from './oles-ipsum.types';

const trim = (s: string) => {
  return s.replace(/^\s+/, '').replace(/\s+$/, '');
};

const getRandomInt = (max: number) => {
  return Math.round(Math.random() * max);
};

const pickRandomWord = (array: string[]) => {
  return array[getRandomInt(array.length - 1)];
};

const getRandomWord = () => {
  if (getRandomInt(.6)) {
    return pickRandomWord(OVHCLOUD_KEYWORDS);
  }
  return LOREM_IPSUM_KEYWORDS[getRandomInt(LOREM_IPSUM_KEYWORDS.length - 1)];
};

const getRandomPunctuation = () => {
  return LOREM_IPSUM_PUNCTUATION[getRandomInt(LOREM_IPSUM_PUNCTUATION.length - 1)];
};

const createWords = (count: number) => {
  let words = '';
  while (count > 0) {
    words += getRandomWord() + ' ';
    count--;
  }
  return trim(words);
};

const sentencePart = () => {
  return createWords(getRandomInt(10) + 3);
};

const createSentence = () => {
  // Get first word
  let sentence = getRandomWord();
  // Add the uppercase to it
  sentence = `${sentence.substring(0, 1).toUpperCase()}${sentence.substring(1)} `;

  if (getRandomInt(1)) {
    for (let i = 0, r = getRandomInt(3) + 1; i < r; i++) {
      sentence += sentencePart() + ', ';
    }
  }
  // last fragment + punctuation
  return sentence + sentencePart() + getRandomPunctuation();
};

const createSentences = (count: number) => {
  let sentences = '';
  while (count > 0) {
    sentences += createSentence() + ' ';
    count--;
  }
  return trim(sentences);
};

const createParagraph = () => {
  return createSentences(getRandomInt(3) + 2);
};

const createParagraphs = (count: number) => {
  let paragraphs = '';
  while (count > 0) {
    paragraphs += createParagraph() + LOREM_IPSUM_CARRIAGE_RETURN + LOREM_IPSUM_CARRIAGE_RETURN;
    count--;
  }
  return trim(paragraphs);
};

export function olesIpsum(generationType?: OlesIpsumGeneration, amount?: number): string {
  let result = OLES_IPSUM_START;

  if(!amount) {
    amount = 1;
  }

  switch (generationType) {
  case OlesIpsumGeneration.paragraphs:
    result += createParagraphs(amount);
    break;
  case OlesIpsumGeneration.sentences:
    result += createSentences(amount);
    break;
  case OlesIpsumGeneration.words:
    result += createWords(amount);
    break;
  default:
    result += createParagraphs(amount);
    break;
  }

  return result;
}
