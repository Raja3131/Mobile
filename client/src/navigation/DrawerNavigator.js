
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native'
import React from 'react'
import { ROUTE_NAMES } from '../constants/routeNames';

export const Home = () =>{
  return(<>
  <View>
    <Text>Hi</Text>
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