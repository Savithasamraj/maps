import React, { useContext } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext';

const CommonScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const handleMap = async () => {
    navigation.navigate('Map');
  };

  const handleMovie = async () => {
    navigation.navigate('Movie');
  };

  const handleLogout = async () => {
    await logout();
    navigation.replace('Login');
  };

  const renderButton = (title, iconName, onPress) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {renderButton('Logout', 'sign-out', handleLogout)}
      </View>
      <View style={styles.centerContainer}>
        {renderButton('MapScreen', 'map', handleMap)}
        {renderButton('MovieScreen', 'film', handleMovie)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  topContainer: {
    alignItems: 'flex-end',
    marginBottom: 'auto',
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default CommonScreen;

