import {StyleSheet} from 'react-native';
import Colors from 'src/contants/Colors';

const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.black,
  },
});

export default S;
