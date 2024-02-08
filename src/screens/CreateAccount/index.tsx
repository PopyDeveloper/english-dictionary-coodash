import {Button} from 'components/Buttons/Button/Button';
import React, {FC, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Colors from 'src/contants/Colors';
import {useAuth} from 'src/hooks/useAuth';

const CreateAccount: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {createUser} = useAuth();
  const handlerLogin = () => {
    createUser({email, password});
  };

  return (
    <View style={S.container}>
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

        <Button onPress={handlerLogin} label="Criar e Fazer Login" />
      </View>
    </View>
  );
};

export default CreateAccount;

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
});
