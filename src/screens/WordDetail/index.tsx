import {RouteProp, useRoute} from '@react-navigation/native';
import Details from 'components/Details';
import NotFound from 'components/NotFound';
import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {WordDetailRoute} from 'src/types/routes';
import {AppDispatch, RootState} from 'src/store';
import {getList, setHistoricInFirestore} from 'src/features/history/actions';
import {ActivityIndicator} from 'react-native';
import {getFromServe} from 'src/features/detail/actions';
import {TWord} from 'src/types/word';
import {setDetail} from 'src/features/detail/detailSlice';

export const WorldDetail: FC = () => {
  const route = useRoute<RouteProp<WordDetailRoute>>();
  const dispatch = useDispatch<AppDispatch>();
  const wordToSearch = route.params?.word;

  const uid = useSelector((state: RootState) => state.auth.uid);
  const {detailWord, loading} = useSelector((state: RootState) => state.detail);
  const historic = useSelector((state: RootState) => state.history.list);

  useEffect(() => {
    dispatch(getList(uid));
  }, [wordToSearch, dispatch, uid]);

  useEffect(() => {
    const wordDetail = historic.find(word => word.word === wordToSearch);
    if (!wordDetail?.meanings) {
      console.info('get');
      dispatch(getFromServe(wordToSearch));
    } else {
      dispatch(setDetail(wordDetail));
    }
  }, [dispatch, wordToSearch]);

  useEffect(() => {
    dispatch(
      setHistoricInFirestore({
        uid,
        data: detailWord?.word ? detailWord : {word: wordToSearch},
      }),
    );
  }, [wordToSearch]);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <>
      {!detailWord?.meanings ? (
        <NotFound wordNotFound={wordToSearch} />
      ) : (
        <Details {...(detailWord as TWord)} />
      )}
    </>
  );
};
