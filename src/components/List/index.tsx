import {useNavigation} from '@react-navigation/native';
import {WordButton} from 'components/WordButton';
import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {WordDetailProp} from 'src/types/routes';

type Props = {
  list: string[];
};

const List: FC<Props> = ({list}) => {
  const {navigate} = useNavigation<WordDetailProp>();

  const goToDetail = (word: string) => {
    navigate('WordDetail', {
      word,
    });
  };

  const renderItem = ({item}: {item: string}) => {
    return (
      <WordButton label={item} onPress={() => goToDetail(item)} key={item} />
    );
  };

  return (
    <FlatList
      keyExtractor={i => i}
      style={S.container}
      data={list}
      numColumns={3}
      renderItem={renderItem}
    />
  );
};

export default List;

const S = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom: 50,
  },
});
