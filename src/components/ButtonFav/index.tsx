import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import S from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {addWord, removeWord} from 'src/features/favorites/favoritesSlice';
import Star from 'components/Star';
import {RootState} from 'src/store';

type Props = {
  word: string;
};

export const ButtonFav: FC<Props> = ({word}) => {
  const dispatch = useDispatch();
  const listFavorites = useSelector((state: RootState) => state.favorites.list);

  const hasFavorited = listFavorites.findIndex(i => i === word) > -1;

  const toggleFav = () => {
    if (hasFavorited) {
      dispatch(removeWord(word));
    } else {
      dispatch(addWord(word));
    }
  };

  return (
    <TouchableOpacity style={S.container} onPress={toggleFav}>
      <Star fill={hasFavorited ? '#ff7f50' : 'white'} />
    </TouchableOpacity>
  );
};
