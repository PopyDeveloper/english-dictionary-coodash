import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TMeanings} from 'src/types/word';
import S from './styles';

type Props = {
  meaningsData: TMeanings[];
};

const Meanings: FC<Props> = ({meaningsData}) => {
  if (!meaningsData) {
    return null;
  }
  return (
    <View style={S.container}>
      <Text style={S.title}>Meanings</Text>
      {meaningsData[0]?.definitions?.map(item => (
        <Text style={S.text}>{item.definition}</Text>
      ))}
    </View>
  );
};

export default Meanings;
