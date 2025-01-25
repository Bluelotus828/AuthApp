import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from '@ant-design/react-native';
import {useDispatch} from 'react-redux';
import {signup} from '../store/authSlice';
import alert from '@ant-design/react-native/lib/modal/alert';

const SignupScreen = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      alert(
        'Missing Fields', // Title
        'Please fill out all fields.', // Content
        [
          {text: 'OK', onPress: () => console.log('Alert dismissed')}, // Optional button
        ],
      );
      return;
    }

    if (password !== confirmPassword) {
      alert(
        'Password Mismatch', // Title
        'Passwords do not match. Please try again.', // Content
        [
          {
            text: 'OK',
            onPress: () => console.log('Password mismatch acknowledged'),
          }, // Optional button
        ],
      );
      return;
    }

    dispatch(signup({email, password}));
    alert(
      'Success', // Title
      'Account created successfully!', // Content
      [
        {
          text: 'OK',
          onPress: () => console.log('Account creation acknowledged'),
        }, // Optional button
      ],
    );
    navigation.navigate('Login');
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
      <Input
        placeholder="Confirm Password"
        value={confirmPassword}
        secureTextEntry
        onChangeText={setConfirmPassword}
        style={styles.input}
      />
      <Button type="primary" onPress={handleSignup} style={styles.button}>
        Signup
      </Button>
      <Button type="ghost" onPress={() => navigation.navigate('Login')}>
        Back to Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  input: {marginBottom: 20},
  button: {marginTop: 10},
});

export default SignupScreen;
