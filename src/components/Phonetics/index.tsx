import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
      {phoneticsData.map(ph => (
        <View key={JSON.stringify(ph)}>
          <Text style={S.text}>{ph.text}</Text>
          {/* {ph.text && <Text style={S.text}>{ph.audio}</Text>} */}
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
    color: '#111',
  },
});
