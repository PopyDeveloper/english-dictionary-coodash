import List from 'components/List';
import React, {FC, useEffect, useRef, useState} from 'react';
import {getDetail} from 'src/sevices/api';

export const WordList: FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const jsonRef = useRef(null);

  useEffect(() => {
    getDetail('hello');
    const data = require('../../data/mock.json');
    const keys = Object.keys(data);
    jsonRef.current = data;
    setWords(keys);
  }, []);

  return (
    <List
      list={words}
      fallbackMessage="Erro ao carregar a lista de palavras."
    />
  );
};
