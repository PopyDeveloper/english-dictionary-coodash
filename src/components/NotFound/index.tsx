import React, {FC} from 'react';
import {Text, View} from 'react-native';
import S from './styles';

type Prop = {
  data: {
    title: string;
    message: string;
    resolution: string;
  };
};

const NotFound: FC<Prop> = ({data: {title, message, resolution}}) => {
  return (
    <View style={S.container}>
      <Text style={S.title}>{title}</Text>
      <Text style={S.message}>{message}</Text>
      <Text style={S.resolution}>{resolution}</Text>
    </View>
  );
};

export default NotFound;
