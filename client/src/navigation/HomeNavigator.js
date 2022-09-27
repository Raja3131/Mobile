import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import GameDetailsScreen from '../screens/GameDetails.Screen';
import { View,Text } from 'react-native-animatable';
import { Home } from '../screens/Home/Home';


const HomeNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GameDetails"
          component={GameDetailsScreen}
          options={({route}) => ({
            title: route.params?.title,
          })}
        />
      </Stack.Navigator>
    );
  };
  export default HomeNavigator;