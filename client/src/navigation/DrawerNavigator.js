
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Pressable } from 'react-native'
import React,{useContext} from 'react'
import { ROUTE_NAMES } from '../constants/routeNames';
import logoutUser from '../context/actions/logoutUser';
import { GlobalContext } from '../context/Provider';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useState } from 'react';
import { useEffect } from 'react';
import Icon from '../components/common/Icon/Icon';
import appColors from '../styles/appColors';
import { Home } from '../screens/Home/Home';
import HomeNavigator from './HomeNavigator';
import TabNavigator from './TabNavigator';
import Container from '../components/common/container/Container';

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
  return (
   <>
   
      <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        
        headerShown: true,
        drawerActiveBackgroundColor: appColors.Blue,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        headerTitle: '',
        headerLeft: () =>
        <Pressable onPress={navigation.toggleDrawer}>
          <Text>
            <Icon
             size={21}
             name="menu"
             type="feather"
             color={appColors.Blue}/>
          </Text>
         </Pressable >
      })}>
        <Drawer.Screen name="Home" component={TabNavigator} options={{
          drawerIcon: ({color}) => (
            <Icon
             size={21}
             name="home"
             type="feather"
             color={appColors.white}/>
          ),
        }}/>

      </Drawer.Navigator>
   </>
  )
}

export default DrawerNavigator