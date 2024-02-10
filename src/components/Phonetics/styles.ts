import {StyleSheet} from 'react-native';
import Colors from 'src/contants/Colors';

export const S = StyleSheet.create({
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
