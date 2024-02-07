import {StyleSheet} from 'react-native';

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
    borderColor: '#111',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    color: '#111',
  },
});

export default S;
