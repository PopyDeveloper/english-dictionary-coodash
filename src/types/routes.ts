import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  WordDetail: {word: string};
};

export type WordDetailProp = NativeStackNavigationProp<
  RootStackParamList,
  'WordDetail'
>;

export type WordDetailRoute = {
  WordDetail: {
    word: string;
  };
};
