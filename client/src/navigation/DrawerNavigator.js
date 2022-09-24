
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Pressable } from 'react-native'
import React,{useContext} from 'react'
import { ROUTE_NAMES } from '../constants/routeNames';
import logoutUser from '../context/actions/logoutUser';
import { GlobalContext } from '../context/Provider';
import { useState } from 'react';
import { useEffect } from 'react';

export const Home = () =>{


 
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);
  console.log(Object.values(data))
  const onLogOut = () =>{
    logoutUser()(authDispatch)
  }
  return(<>
  <View>
    <Pressable
    onPress={onLogOut}
    >
      <Text>LogOut</Text>
      {/* <Text>{data}</Text> */}
    </Pressable>
  </View>
  </>)
}
const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
  return (
   <>
     <Drawer.Navigator
      initialRouteName="Back"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 200,
        },
        drawerLabelStyle: {
          color: '#009387',
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}>
        <Drawer.Screen name="Home" component={Home} />

      </Drawer.Navigator>
   </>
  )
}

export default DrawerNavigator