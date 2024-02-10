import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import S from './styles';
import {useDispatch, useSelector} from 'react-redux';
import Star from 'components/Star';
import {AppDispatch, RootState} from 'src/store';
import Colors from 'src/contants/Colors';
import {toggleFavorite} from 'src/features/favorites/actions';

type Props = {
  word: string;
};

export const ButtonFav: FC<Props> = ({word}) => {
  const dispatch = useDispatch<AppDispatch>();
  const listFavorites = useSelector((state: RootState) => state.favorites.list);
  const uid = useSelector((state: RootState) => state.auth.uid);

  const hasFavorited = listFavorites?.findIndex(i => i === word) > -1;

  const toggleFav = () => {
    dispatch(toggleFavorite({uid, word}));
  };

  return (
    <TouchableOpacity
      style={S.container}
      onPress={toggleFav}
      testID="fav-button">
      <Star fill={hasFavorited ? Colors.orange : Colors.white} />
    </TouchableOpacity>
  );
};
