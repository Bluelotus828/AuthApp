import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from '@ant-design/react-native';
import {useDispatch} from 'react-redux';
import {login} from '../store/authSlice';
import alert from '@ant-design/react-native/lib/modal/alert';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!email || !password) {
      alert(
        'Missing Fields', // Title
        'Please fill out all fields.', // Content
        [
          {
            text: 'OK',
            onPress: () => console.log('Missing fields acknowledged'),
          }, // Optional button
        ],
      );
      return;
    }

    dispatch(login({email, password}));

    alert(
      'Login Success', // Title
      'You have logged in successfully!', // Content
      [
        {text: 'OK', onPress: () => console.log('Login success acknowledged')}, // Optional button
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Input
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button type="primary" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Button type="ghost" onPress={() => navigation.navigate('Signup')}>
        Go to Signup
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  input: {marginBottom: 20},
  button: {marginTop: 10},
});

export default LoginScreen;
