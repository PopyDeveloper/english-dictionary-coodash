import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  CreateAccount: undefined;
  WordDetail: {word: string};
};

export type WordDetailProp = NativeStackNavigationProp<
  RootStackParamList,
  'WordDetail'
>;

export type SignInProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export type WordDetailRoute = {
  WordDetail: {
    word: string;
  };
};
