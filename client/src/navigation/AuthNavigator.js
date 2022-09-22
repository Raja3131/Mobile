import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import Register from '../screens/Register/Register';
import Login from '../screens/Login/Login'
import { ROUTE_NAMES } from './../constants/routeNames';
const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator()
  return (
   <>
   <AuthStack.Navigator screenOptions={{headerShown: false}}>
   <AuthStack.Screen name={ROUTE_NAMES.REGISTER} component={Register}/>
   <AuthStack.Screen name={ROUTE_NAMES.LOGIN} component={Login}/>

   </AuthStack.Navigator>
   </>
  )
}

export default AuthNavigator