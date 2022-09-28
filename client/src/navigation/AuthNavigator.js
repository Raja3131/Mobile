import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

import {ROUTE_NAMES} from './../constants/routeNames';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <>
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={ROUTE_NAMES.LOGIN} component={Login} />

        <AuthStack.Screen name={ROUTE_NAMES.REGISTER} component={Register} />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthNavigator;
