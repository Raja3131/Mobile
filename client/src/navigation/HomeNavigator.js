import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { View,Text } from 'react-native-animatable';
import { Home } from '../screens/Home/Home';
import ChangePassword from '../screens/ChangePassword';
import EditProfile from '../screens/EditProfile';
import Appointment from '../screens/Appointment/Appointment';


const HomeNavigator = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}

          options={({route}) => ({
            title: route.params?.title,
            headerBackVisible:true,
            header: () => null,
            headerShown: false
          })}
          screenOptions={{
            headerShown: false,
          }}
          
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}

          options={({route}) => ({
            title: route.params?.title,
            headerBackVisible:true,
            header: () => null,
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
          })}
          screenOptions={{
            headerShown: false,
          }}
          
        />
        <Stack.Screen
          name="Appointment"
          component={Appointment}

          options={({route}) => ({
            title: route.params?.title,
            headerBackVisible:true,
            header: () => null,
            headerShown: false
          })}
          screenOptions={{
            headerShown: false,
          }}
          
        />
      </Stack.Navigator>
    );
  };
  export default HomeNavigator;