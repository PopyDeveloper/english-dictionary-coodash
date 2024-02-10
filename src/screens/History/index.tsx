import List from 'components/List';
import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getList} from 'src/features/history/actions';
import {AppDispatch, RootState} from 'src/store';

export const History: FC = () => {
  const historyList = useSelector((state: RootState) => state.history.list);
  const uid = useSelector((state: RootState) => state.auth.uid);
  const dispatch = useDispatch<AppDispatch>();
  const listToRender = historyList?.map(wordData => wordData.word);

  console.info(listToRender);
  useEffect(() => {
    dispatch(getList(uid));
  }, [dispatch, uid]);

  return (
    <View>
      <List
        list={listToRender}
        fallbackMessage="Você ainda não pesquisou nenhuma palavra"
      />
    </View>
  );
};
