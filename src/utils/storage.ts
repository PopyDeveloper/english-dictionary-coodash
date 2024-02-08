import AsyncStorage from '@react-native-async-storage/async-storage';
import {TKeyStorage} from 'src/types/keysStorage';

export const getItemStorage = async (key: TKeyStorage) => {
  const item = await AsyncStorage.getItem(key);
  if (item) {
    return item;
  }
  return null;
};

export const saveInStorage = async (key: TKeyStorage, value: any) => {
  try {
    const data = JSON.stringify(value);
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    throw new Error('Erro to save storage');
  }
};

export const clearStorage = async () => {
  await AsyncStorage.clear();
};
