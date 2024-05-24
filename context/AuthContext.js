import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    
    const storedUser = {
      username: 'user',
      password: 'password123',
    };

    if (username === storedUser.username && password === storedUser.password) {
      setUser(storedUser);
      await AsyncStorage.setItem('user', JSON.stringify(storedUser));
      return true;
    }
    return false;
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  const checkLogin = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

