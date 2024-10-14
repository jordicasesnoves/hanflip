import { FlashCardType, FlashCardGroupsType } from './types';

export const SIMPLE_VOWELS: FlashCardType[] = [
  {
    hangul: 'ㅏ',
    romanization: 'a',
  },
  {
    hangul: 'ㅑ',
    romanization: 'ya',
  },
  {
    hangul: 'ㅓ',
    romanization: 'eo',
  },
  {
    hangul: 'ㅕ',
    romanization: 'yeo',
  },
  {
    hangul: 'ㅗ',
    romanization: 'o',
  },
  {
    hangul: 'ㅛ',
    romanization: 'yo',
  },
  {
    hangul: 'ㅜ',
    romanization: 'u',
  },
  {
    hangul: 'ㅠ',
    romanization: 'yu',
  },
  {
    hangul: 'ㅡ',
    romanization: 'eu',
  },
  {
    hangul: 'ㅣ',
    romanization: 'i',
  },
];

export const SIMPLE_CONSONANTS: FlashCardType[] = [
  {
    hangul: 'ㄱ',
    romanization: ['g', 'k'],
  },
  {
    hangul: 'ㄴ',
    romanization: ['n'],
  },
  {
    hangul: 'ㄷ',
    romanization: ['d', 't'],
  },
  {
    hangul: 'ㄹ',
    romanization: ['r', 'l'],
  },
  {
    hangul: 'ㅁ',
    romanization: ['m'],
  },
  {
    hangul: 'ㅂ',
    romanization: ['b', 'p'],
  },
  {
    hangul: 'ㅅ',
    romanization: ['s'],
  },
  {
    hangul: 'ㅇ',
    romanization: ['-'],
  },
  {
    hangul: 'ㅈ',
    romanization: ['j'],
  },
  {
    hangul: 'ㅊ',
    romanization: ['ch'],
  },
  {
    hangul: 'ㅋ',
    romanization: ['g', 'k'],
  },
  {
    hangul: 'ㅌ',
    romanization: ['d', 't'],
  },
  {
    hangul: 'ㅍ',
    romanization: ['p', 'pp'],
  },
  {
    hangul: 'ㅎ',
    romanization: ['h'],
  },
];

export const FLASH_CARDS_MAP: {
  [key in FlashCardGroupsType]: FlashCardType[];
} = {
  'simple-vowels': SIMPLE_VOWELS,
  'simple-consonants': SIMPLE_CONSONANTS,
};
