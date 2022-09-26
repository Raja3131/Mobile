import React, { useContext } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from './common/Icon/Icon';
import appColors from '../styles/appColors';
import { GlobalContext } from '../context/Provider';
import logoutUser from '../context/actions/logoutUser';

const CustomDrawer = props => {
    const {
        authDispatch,
        authState: {error, loading, isLoggedIn, data},
      } = useContext(GlobalContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: appColors.Blue}}>
        <ImageBackground
          source={require('../assets/images/logo.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/logo.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
             {data['user'].firstName.toUpperCase()}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
            </Text>
            <Icon
            size={21}
            name="home"
            type="feather"
            color={appColors.Blue}
          />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Ionicons name="share-social-outline" size={22} /> */}
            <Icon
            size={21}
            name="eye"
            type="feather"
            color={appColors.Blue}
          />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            logoutUser()(authDispatch)

        }} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            size={21}
            name="sign-out"
            type="fa"
            color={appColors.Blue}
          />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;