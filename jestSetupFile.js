import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => {}),
  useDispatch: jest.fn(() => {}),
}));

jest.mock('firebase/auth', () => {
  return {
    getReactNativePersistence: jest.fn(),
    initializeAuth: jest.fn(),
  };
});

jest.mock('firebase/app', () => {
  return {
    initializeApp: jest.fn(),
  };
});

jest.mock('firebase/firestore', () => {
  const firestore = jest.fn();
  firestore.mockImplementation(() => {
    return {
      collection: jest.fn(),
      doc: jest.fn(),
      getDocs: jest.fn(),
      query: jest.fn(),
      setDoc: jest.fn(),
    };
  });

  return {
    getFirestore: firestore,
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
      };
    },
  };
});
