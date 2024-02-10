import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './routes';

import {AUTH_TOKEN} from './contants/StorageKeys';
import {getItemStorage} from './utils/storage';
import {setAuth} from './features/auth/authSlice';
import {useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyIsLogged = async () => {
      const data = await getItemStorage(AUTH_TOKEN);
      if (data) {
        const auth = JSON.parse(data);
        const {token, uid} = auth;
        dispatch(setAuth({token, uid}));
      }
    };

    verifyIsLogged();
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
