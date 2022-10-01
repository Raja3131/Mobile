import {useContext, useEffect, useState} from 'react';
import {View, Text, Pressable, Button} from 'react-native';
import {GlobalContext} from '../../context/Provider';
import styles from './styles';
import {TextStyles} from '../../styles/Global';
import appColors from '../../styles/appColors';
import Icon from '../../components/common/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '../../components/common/DateTimePicker/DateTimePicker';

export const Home = () => {
  const {navigate} = useNavigation()
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);
  console.log(data);
  const onLogOut = () => {
    logoutUser()(authDispatch);
  };

  return (
    <>
      <View
        style={styles.homeContainer}>
        {}
        <View style={styles.Headers}>
          <Text style={[TextStyles.primaryText, {color: 'black'}]}>
            Welcome To Heartly
          </Text>
          <Text style={[TextStyles.secondaryText, {color: 'white'}]}>
            Hi {data['user'].firstName.toUpperCase()}
          </Text>
        </View>

      <View style={styles.appointmentContainer}>

      </View>
      <View style={styles.iconContainer}>
          <Pressable style={styles.plusIconButton} onPress={() => navigate('Appointment')}>
            <Icon
              size={40}
              name="plus-circle"
              type="feather"
              color={appColors.Blue}
            />
          </Pressable>
        </View>
      </View>

    </>
  );
};
