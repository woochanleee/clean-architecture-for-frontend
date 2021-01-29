import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

import { useController } from '../../../main/controller';
import { useAuthRedux } from '../../container/redux';

export default () => {
  const { userController } = useController();
  const {login} = useAuthRedux();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function onChangeEmail(email: string) {
    setEmail(email);
  }

  function onChangePassword(password: string) {
    setPassword(password);
  }

  function onPressLogin() {
    userController.login(email, password);
  }

  return (
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.textInpput}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.textInpput}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
      />
      <Button onPress={onPressLogin} title="로그인" />
      <Text>
        {login.loading ? 'true' : 'false'}
        {JSON.stringify(login.response)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    paddingVertical: 24
  },
  textInpput: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 45,
    borderColor: 'lightgray',
    borderWidth: 1,
    color: 'black',
    marginBottom: 8,
  },
});
