import {TPhonetics} from 'components/Phonetics';

export type TWord = {
  word: string;
  meanings: TMeanings[];
  phonetics: TPhonetics[];
  sourceUrls: string[];
  license: {
    name: string;
    url: string;
  };
};

export type TMeanings = {
  antonyms: string[];
  definitions: TDefinition[];
  partOfSpeech: string;
  synonyms: string[];
};

type TDefinition = {
  definition: string;
};
