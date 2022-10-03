import {useCallback, useContext, useEffect, useState} from 'react';
import {View, Text, Pressable, Button} from 'react-native';
import {GlobalContext} from '../../context/Provider';
import styles from './styles';
import {TextStyles} from '../../styles/Global';
import appColors from '../../styles/appColors';
import Icon from '../../components/common/Icon/Icon';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import DateTimePicker from '../../components/common/DatePicker/DatePicker';
import getAppointments from '../../context/actions/appointments/getAppointments';
import logoutUser from '../../context/actions/AuthUser/logoutUser';
import Message from '../../components/common/Message/Message';
import Container from '../../components/common/container/Container';

export const Home = () => {
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);
  const onLogOut = () => {
    logoutUser()(authDispatch);
  };

  const {
    appointmentDispatch,
    appointmentState: {
      getAppointments: {AppointData, AppointLoading, AppointError},
    },
  } = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      console.log(data['user'].firstName);
      getAppointments(data['user']._id)(appointmentDispatch);
    }, []),
  );

  const renderAppointments = ()=>{
    if(AppointData.length===0){
      return(
        <>
        <Message message="No Appointments" primary />
        </>
      )
    }
    return AppointData.reverse().map(appointment => (
      <>
      <View style={styles.Appointment}>
        <View style={styles.itemContainer}>
<Text>{appointment.patientName}</Text>
      </View>
      </View>
      </>
    ));
  }
  return (
    <>
    <Container>
      <View style={styles.homeContainer}>
        {}
        <View style={styles.Headers}>
          <Text style={[TextStyles.primaryText, {color: 'black'}]}>
            Welcome To Heartly
          </Text>
          <Text style={[TextStyles.secondaryText, {color: 'white'}]}>
            Hi {data['user'].firstName.toUpperCase()}
          </Text>
        </View>
        
      {renderAppointments()}
      
        <View style={styles.iconContainer}>
          <Pressable
            style={styles.plusIconButton}
            onPress={() => navigate('Appointment')}>
            <Icon
              size={40}
              name="plus-circle"
              type="feather"
              color={appColors.Blue}
            />
          </Pressable>
        </View>
      </View>
      </Container>
    </>
  );
};
