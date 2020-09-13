import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginProvider } from './src/context/LoginContext';
import LoginScreen from './src/screens/login/LoginScreen';
import SignInScreen from './src/screens/signIn/SignInScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LoginProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Login">
          <Stack.Screen name="Home" component={LoginScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SigIn" component={SignInScreen} />
        </Stack.Navigator>
      </LoginProvider>
    </NavigationContainer>
  );
}

