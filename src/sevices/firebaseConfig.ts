import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyARLaEL7PM4tNAZTAXQLkqfIyXh7KNNc5U',
  authDomain: 'englishdictionary-5bc64.firebaseapp.com',
  projectId: 'englishdictionary-5bc64',
  storageBucket: 'englishdictionary-5bc64.appspot.com',
  messagingSenderId: '909825067717',
  appId: '1:909825067717:web:8753044663d97662cf3eac',
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);
