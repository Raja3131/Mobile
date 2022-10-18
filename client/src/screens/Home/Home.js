import {useCallback, useContext, useEffect, useState} from 'react';
import {View, Text, Pressable, Button} from 'react-native';
import {GlobalContext} from '../../context/Provider';
import styles from './styles';
import {TextStyles} from '../../styles/Global';
import appColors from '../../styles/appColors';
import Icon from '../../components/common/Icon/Icon';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import getAppointments from '../../context/actions/appointments/getAppointments';
import logoutUser from '../../context/actions/AuthUser/logoutUser';
import Message from '../../components/common/Message/Message';
import Container from '../../components/common/container/Container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../components/common/CustomButton/CustomButton';
import CustomText from '../../components/common/CustomText/CustomText';
export const Home = () => {
  const {navigate} = useNavigation();
  const [userData, setUserData] = useState([]);
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);
  const onLogOut = () => {
    logoutUser()(authDispatch);
  };
  const userName = data['user'].firstName.toUpperCase();

  const {
    appointmentDispatch,
    appointmentState: {
      getAppointments: {AppointData, AppointLoading, AppointError},
    },
  } = useContext(GlobalContext);
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('user')
  //     if(value !== null) {
  //       setUserData(value)
  //       console.log('UserData:',userData)
  //     }
  //   } catch(e) {
  //     console.log(error)
  //   }
  // }

  useFocusEffect(
    useCallback(() => {
      getAppointments(data['user']._id)(appointmentDispatch);
      console.log(AppointData);
    }, []),
  );

  const renderAppointments = () => {
    if (AppointData.length === 0) {
      return (
        <>
          <Message message="No Appointments" primary />

        </>
      );
    }
    return AppointData.reverse().map(appointment => (
      <>
        <View  style={styles.Appointment}>
          <View style={styles.itemContainer}>
            <CustomText key={appointment._id} style={[TextStyles.secondaryText, {marginTop: -10}]}>
              {appointment.patientName.charAt(0).toUpperCase() + appointment.patientName.slice(1)}
            </CustomText>
            <CustomText>{dayjs(appointment.date).format("D-MMMM-YYYY")}</CustomText>
            <CustomText>{dayjs(appointment.date).format("h:mm A")}</CustomText>

            <CustomText>{appointment.services}</CustomText>
            <View style={styles.buttonContainer}>
          <CustomButton title="Edit" picker style={{height:20,width:10}}/>
          <CustomButton title="Cancel" danger style={{height:20,width:10}}/>

            </View>

          </View>
        </View>
      </>
    ));
  };
  return (
    <>
      <Container>
        <ScrollView>
        <View style={styles.homeContainer}>
          <View style={styles.Headers}>
            <Text style={[TextStyles.primaryText, {color: appColors.dimBlack}]}>
              Welcome To Heartly
            </Text>
            <Text style={[TextStyles.secondaryText, {color: 'white'}]}>
              {userName}
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
        </ScrollView>
      </Container>
    </>
  );
};
