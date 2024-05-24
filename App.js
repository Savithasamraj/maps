



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import { Text } from 'react-native';
import Moviescreen from './screens/MovieScreen';
import DetailScreen from './screens/DetailScreen';
import CommonScreen from './screens/Common';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Movie" component={Moviescreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Common" component={CommonScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
   
  );
}


