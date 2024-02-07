import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './routes';

import {store} from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
