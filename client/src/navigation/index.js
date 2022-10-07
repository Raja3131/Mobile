import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { GlobalContext } from "../context/Provider";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { navigationRef } from "./rootNavigator";

const AppNavContainer = () => {
    const {authState:{isLoggedIn}} = useContext(GlobalContext)
    // console.log(isLoggedIn)
  return (
   <>
   <NavigationContainer ref={navigationRef}>
    {
      isLoggedIn ? <DrawerNavigator/>:<AuthNavigator/>
    }
   </NavigationContainer>
   </>
  )
}

export default AppNavContainer