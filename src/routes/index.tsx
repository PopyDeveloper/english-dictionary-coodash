import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from 'screens/Home';
import {WorldDetail} from 'screens/WordDetail';
import {RootStackParamList} from 'src/types/routes';

export default function Routes() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'DICTIONARY',
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WordDetail" component={WorldDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
