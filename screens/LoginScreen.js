import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, checkLogin, user } = useContext(AuthContext);

  useEffect(() => {
    checkLogin();
    if (user) {
      navigation.replace('Common');
    }
  }, [user]);

  const handleLogin = async () => {
    if (username === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    const isAuthenticated = await login(username, password);
    if (isAuthenticated) {
      navigation.replace('Common');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

export default LoginScreen;
