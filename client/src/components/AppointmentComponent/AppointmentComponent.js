import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Input from '../common/Input/Input'
import Container from '../common/container/Container'
import CustomButton from '../common/CustomButton/CustomButton'
import styles from './styles'
import Icon from '../common/Icon/Icon'
import appColors from '../../styles/appColors'
import CustomDropDown from '../common/CustomDropDown/CustomDropDown'
import DateTimePicker from '../common/DateTimePicker/DateTimePicker'
const AppointmentComponent = () => {
    const [value, setValue] = useState(null);
    const services = [
      {label: 'Elder care', value: 'Elder care'},
      {label: 'Home Nursing', value: 'Home Nursing'},
      {label: 'Physiotherapy', value: 'Physiotherapy'},
      {label: 'Doctor Visit', value: 'Doctor Visit'},
    ];
    const additionalServices = [
      {label: 'Pharmacy Lab', value: 'Pharmacy Lab'},
      {label: 'Assistance Services', value: 'Assistance Services'},
    ];

    
  return (
   <>
   <Container>
   <View style={styles.appointmentHeader}><Text style={styles.appointmentText}>New Appointment</Text></View>
    <Input label="Patient Name"/>
    <Input label="Address"/>
    <Input label="Location"/>
    <Input label="District"/>
    <Input label="Pincode"/>
    <CustomDropDown data={services}/>
    <Input label="Mobile"/>
    <Input label="Email"/>
    <DateTimePicker/>
    <CustomDropDown data={additionalServices}/>


    <CustomButton title="Submit" primary onPress={()=>console.log(data)}/>
    <CustomButton title="Clear" primary/>



    


   </Container>
   </>
  )
}

export default AppointmentComponent