import {StyleSheet} from 'react-native';

const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#222',
  },
  resolution: {
    fontSize: 18,
    textAlign: 'center',
    color: '#999',
  },
});

export default S;
