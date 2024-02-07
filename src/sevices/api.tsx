import {TWord} from 'src/types/word';

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

type Response = TWord;

export const getDetail = async (word: string): Promise<Response[]> => {
  try {
    const response = await fetch(`${BASE_URL}${word}`);
    const result = await response.json();

    return result;
  } catch (e) {
    throw new Error('Erro ao carregar os detalhes');
  }
};
