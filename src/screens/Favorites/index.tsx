import List from 'components/List';
import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoritesByUid} from 'src/features/favorites/actions';
import {AppDispatch, RootState} from 'src/store';

export const Favorites: FC = () => {
  const favoriteList = useSelector((state: RootState) => state.favorites.list);
  const dispatch = useDispatch<AppDispatch>();
  const uid = useSelector((state: RootState) => state.auth.uid);

  useEffect(() => {
    dispatch(getFavoritesByUid(uid));
  }, [dispatch, uid]);

  return (
    <View>
      <List
        list={favoriteList}
        fallbackMessage="Você ainda não favoritou nenhuma palavra"
      />
    </View>
  );
};
