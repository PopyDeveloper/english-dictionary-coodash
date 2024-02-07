import {RouteProp, useRoute} from '@react-navigation/native';
import Details from 'components/Details';
import NotFound from 'components/NotFound';
import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addWord} from 'src/features/history/historySlice';
import {getDetail} from 'src/sevices/api';
import {WordDetailRoute} from 'src/types/routes';
import {TWord} from 'src/types/word';

export const WorldDetail: FC = () => {
  const route = useRoute<RouteProp<WordDetailRoute>>();
  const dispatch = useDispatch();

  const [data, setData] = useState<TWord[]>({} as TWord[]);

  const wordToSearch = route.params?.word;

  useEffect(() => {
    dispatch(addWord(wordToSearch));
  }, [wordToSearch, dispatch]);

  useEffect(() => {
    const get = async () => {
      const res = await getDetail(wordToSearch);
      setData(res);
    };
    get();
  }, [wordToSearch]);

  if (!Array.isArray(data)) {
    return <NotFound data={data} />;
  }
  return <Details {...data[0]} />;
};
