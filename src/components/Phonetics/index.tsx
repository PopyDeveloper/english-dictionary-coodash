import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {S} from './styles';

export type TPhonetics = {
  text: string;
  audio: string;
  license?: {
    name: string;
    url: string;
  };
};

type Props = {
  phoneticsData: TPhonetics[];
};

const Phonetics: FC<Props> = ({phoneticsData}) => {
  if (!phoneticsData) {
    return null;
  }

  return (
    <View>
      {phoneticsData.map((ph, index) => (
        <View key={index.toString()}>
          <Text style={S.text}>{ph.text}</Text>
        </View>
      ))}
    </View>
  );
};

export default Phonetics;
