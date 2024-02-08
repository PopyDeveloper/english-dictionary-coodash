import {StyleSheet} from 'react-native';
import Colors from 'src/contants/Colors';

const S = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    color: Colors.black,
  },
});

export default S;
