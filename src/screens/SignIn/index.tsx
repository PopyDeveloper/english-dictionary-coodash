import {useNavigation} from '@react-navigation/native';
import {Button} from 'components/Buttons/Button/Button';
import React, {FC, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from 'src/contants/Colors';
import {useAuth} from 'src/hooks/useAuth';
import {SignInProp} from 'src/types/routes';

const SignIn: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {login} = useAuth();
  const {navigate} = useNavigation<SignInProp>();

  const handlerLogin = () => {
    login({email, password});
  };

  const createAccount = () => {
    navigate('CreateAccount');
  };

  return (
    <View style={S.container}>
      <Text style={S.title}>Dictionary</Text>

      <View>
        <TextInput
          style={S.input}
          placeholder="E-mail"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={S.input}
          secureTextEntry
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
        />

        <Button onPress={handlerLogin} label="Login" />
      </View>
      <View style={S.createContainer}>
        <Button
          onPress={createAccount}
          color={Colors.secondary}
          label="Criar Conta"
        />
      </View>
    </View>
  );
};

export default SignIn;

const S = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 10,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 20,
  },
  createContainer: {
    marginTop: 20,
  },
});
