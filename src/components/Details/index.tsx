import Meanings from 'components/Meanings';
import S from './styles';
import {Phonetics} from 'components/Phonetics';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TWord} from 'src/types/word';
import {ButtonFav} from 'components/ButtonFav';

type Props = TWord;

const Details: FC<Props> = ({word, phonetics, meanings}) => {
  return (
    <View style={S.container}>
      <ButtonFav word={word} />

      <View style={S.content}>
        <Text style={S.text}>{word}</Text>

        <Phonetics phoneticsData={phonetics} />
      </View>

      <Meanings meaningsData={meanings} />
    </View>
  );
};

export default Details;
