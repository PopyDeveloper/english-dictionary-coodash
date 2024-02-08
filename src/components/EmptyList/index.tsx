import React, {FC} from 'react';
import {Text, View} from 'react-native';
import S from './styles';

type Prop = {
  message: string;
};

const EmptyList: FC<Prop> = ({message}) => {
  return (
    <View style={S.container}>
      <Text style={S.message}>{message}</Text>
    </View>
  );
};

export default EmptyList;
