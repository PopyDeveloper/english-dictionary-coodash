import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from 'src/contants/Colors';

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

export const Phonetics: FC<Props> = ({phoneticsData}) => {
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

const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    color: Colors.black,
  },
});
