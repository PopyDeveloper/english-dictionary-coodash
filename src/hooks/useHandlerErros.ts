import {Alert} from 'react-native';

export const useHandlerErrors = () => {
  const showError = ({title, message}: {title: string; message: string}) => {
    Alert.alert(title, message);
  };
  return {
    showError,
  };
};
