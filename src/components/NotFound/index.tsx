import React, {FC} from 'react';
import {Text, View} from 'react-native';
import S from './styles';

type Prop = {wordNotFound: string};

const NotFound: FC<Prop> = ({wordNotFound}) => {
  return (
    <View style={S.container}>
      <Text style={S.title}>{wordNotFound}</Text>

      <Text style={S.title}>No Definitions Found</Text>
      <Text style={S.message}>
        Sorry pal, we couldn't find definitions for the word you were looking
        for.
      </Text>
      <Text style={S.resolution}>
        You can try the search again at later time or head to the web instead.
      </Text>
    </View>
  );
};

export default NotFound;
