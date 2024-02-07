import List from 'components/List';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'src/store';

export const Favorites: FC = () => {
  const favoriteList = useSelector((state: RootState) => state.favorites.list);

  return (
    <View>
      <List list={favoriteList} />
    </View>
  );
};
