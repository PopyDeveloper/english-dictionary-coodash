import List from 'components/List';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'src/store';

export const History: FC = () => {
  const historyList = useSelector((state: RootState) => state.history.list);

  return (
    <View>
      <List list={historyList} />
    </View>
  );
};
