import {StyleSheet} from 'react-native';
import Colors from 'src/contants/Colors';

const S = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '600',
  },
});

export default S;
