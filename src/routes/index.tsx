import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from 'screens/Home';
import {WorldDetail} from 'screens/WordDetail';
import {RootStackParamList} from 'src/types/routes';
import SignIn from 'screens/SignIn';
import CreateAccount from 'screens/CreateAccount';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/store';
import {Button} from 'components/Buttons/Button/Button';
import {removeToken} from 'src/features/auth/authSlice';
import Colors from 'src/contants/Colors';

export default function Routes() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  const buttonLogoff = () => (
    <Button
      label="Sair"
      color={Colors.secondary}
      onPress={() => dispatch(removeToken())}
    />
  );

  const guardRoutes = () =>
    token ? (
      <Stack.Navigator
        screenOptions={{
          title: 'DICTIONARY',
          headerBackTitleVisible: false,
          headerRight: () => buttonLogoff(),
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WordDetail" component={WorldDetail} />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator
        screenOptions={{
          title: 'DICTIONARY',
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="SignIn"
          options={{headerShown: false}}
          component={SignIn}
        />
        <Stack.Screen
          name="CreateAccount"
          options={{headerTransparent: true, title: 'Criar Usuário'}}
          component={CreateAccount}
        />
      </Stack.Navigator>
    );

  return <NavigationContainer>{guardRoutes()}</NavigationContainer>;
}
