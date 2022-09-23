import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { GlobalContext } from "../context/Provider";
import AuthNavigator from "./AuthNavigator";

const AppNavContainer = () => {
    const {authState:{isLoggedIn}} = useContext(GlobalContext)
    // console.log(isLoggedIn)
  return (
   <>
   <NavigationContainer>
    <AuthNavigator/>
   </NavigationContainer>
   </>
  )
}

export default AppNavContainer