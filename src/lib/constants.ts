import { FlashCardType, FlashCardGroupsType } from './types';

export const SIMPLE_VOWELS: FlashCardType[] = [
  {
    front: 'ㅏ',
    back: 'a',
  },
  {
    front: 'ㅑ',
    back: 'ya',
  },
  {
    front: 'ㅓ',
    back: 'eo',
  },
  {
    front: 'ㅕ',
    back: 'yeo',
  },
  {
    front: 'ㅗ',
    back: 'o',
  },
  {
    front: 'ㅛ',
    back: 'yo',
  },
  {
    front: 'ㅜ',
    back: 'u',
  },
  {
    front: 'ㅠ',
    back: 'yu',
  },
  {
    front: 'ㅡ',
    back: 'eu',
  },
  {
    front: 'ㅣ',
    back: 'i',
  },
];

export const SIMPLE_CONSONANTS: FlashCardType[] = [
  {
    front: 'ㄱ',
    back: 'g',
  },
  {
    front: 'ㄴ',
    back: 'n',
  },
  {
    front: 'ㄷ',
    back: `'d' 't'`,
  },
  {
    front: 'ㄹ',
    back: `'r' 'l'`,
  },
  {
    front: 'ㅁ',
    back: 'm',
  },
  {
    front: 'ㅂ',
    back: `'b' 'p'`,
  },
  {
    front: 'ㅅ',
    back: 's',
  },
  {
    front: 'ㅇ',
    back: 'ng',
  },
  {
    front: 'ㅈ',
    back: 'j',
  },
  {
    front: 'ㅊ',
    back: 'ch',
  },
  {
    front: 'ㅋ',
    back: 'k',
  },
  {
    front: 'ㅌ',
    back: 't',
  },
  {
    front: 'ㅍ',
    back: 'p',
  },
  {
    front: 'ㅎ',
    back: 'h',
  },
];

export const FLASH_CARDS_MAP: {
  [key in FlashCardGroupsType]: FlashCardType[];
} = {
  'simple-vowels': SIMPLE_VOWELS,
  'simple-consonants': SIMPLE_CONSONANTS,
};
