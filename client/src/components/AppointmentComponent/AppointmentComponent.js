import {View, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import Input from '../common/Input/Input';
import Container from '../common/container/Container';
import CustomButton from '../common/CustomButton/CustomButton';
import styles from './styles';
import Icon from '../common/Icon/Icon';
import appColors from '../../styles/appColors';
import CustomDropDown from '../common/CustomDropDown/CustomDropDown';
import DateTimePicker from '../common/DateTimePicker/DateTimePicker';
import { GlobalContext } from '../../context/Provider';
const AppointmentComponent = ({form,errors,onChange,onSubmit}) => {
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);

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
        <View style={styles.appointmentHeader}>
          <Text style={styles.appointmentText}>New Appointment</Text>
        </View>
        <Input label="Patient Name" onChangeText={(value)=>onChange({name:'patientName',value})} value={form.patientName} error={errors.patientName} />
        <Input label="Address" onChangeText={(value)=>onChange({name:'address',value})} value={form.address} error={errors.address}/>
        <Input label="Location" onChangeText={(value)=>{onChange({name:'location',value})}} value={form.location} error={errors.location}/>
        <Input label="District" onChangeText={(value)=>onChange({name:'district',value})} error={errors.district} />
        <Input label="Pincode" onChangeText={(value)=>onChange({name:'pincode',value})} value={form.pincode} maxLength={6} keyboardType="numeric" error={errors.pincode} />
        <CustomDropDown data={services} />
        <Input label="Mobile" onChangeText={(value)=>onChange({name:'mobile',value})} value={form.mobile} error={errors.mobile} maxLength={10} keyboardType="numeric"  />
        <Input label="Email" onChangeText={(value)=>onChange({name:'email',value})}  value={form.email} error={errors.email}/>
        <DateTimePicker />
        <CustomDropDown data={additionalServices} />

        <CustomButton
          title="Submit"
          primary
          onPress={() => onSubmit(data['user']._id)}
        />
        <CustomButton title="Clear" primary />
      </Container>
    </>
  );
};

export default AppointmentComponent;
