import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboard from '../Screens/Onboard';
import Login from '../Screens/Login';
import SignupScreen from '../Screens/SignupScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, SetIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        SetIsFirstLaunch(true);
      } else {
        SetIsFirstLaunch(false);
      }
    })
  }, []);

  if (isFirstLaunch == null) {
    return null;
  }
  else if (isFirstLaunch == true) {
    routeName = 'Onboard';
  }
  else {
    routeName = "Login"
  }

  return (
      <Stack.Navigator initialRouteName = {routeName} >
        <Stack.Screen name="Onboard" component={Onboard} options = {{header : () => null}} />
        <Stack.Screen name="Login" component={Login} options = {{header : () => null}}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options = {{header : () => null}}/>

      </Stack.Navigator>
  );
};

export default AuthStack;
