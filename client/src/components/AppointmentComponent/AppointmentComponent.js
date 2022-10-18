import {View, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import Input from '../common/Input/Input';
import Container from '../common/container/Container';
import CustomButton from '../common/CustomButton/CustomButton';
import styles from './styles';
import Icon from '../common/Icon/Icon';
import appColors from '../../styles/appColors';
import CustomDropDown from '../common/CustomDropDown/CustomDropDown';
import { GlobalContext } from '../../context/Provider';
import DateTimePicker from './../common/DateTimePicker/DateTimePicker';
import { Dropdown } from 'react-native-element-dropdown';
const AppointmentComponent = ({form,errors,onChange,onSubmit,onDateChange,show,setShow,date,dropdownValue,setDropdownValue}) => {
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);



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
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === dropdownValue && (
          <Icon style={styles.icon} type="evil" name="arrow-down" size={20} />
        )}
      </View>
    );
  };

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
        {/* <CustomDropDown data={services} /> */}
        <Input label="Mobile" onChangeText={(value)=>onChange({name:'mobile',value})} value={form.mobile} error={errors.mobile} maxLength={10} keyboardType="numeric"  />
        <Input label="Email" onChangeText={(value)=>onChange({name:'email',value})}  value={form.email} error={errors.email}/>
        <DateTimePicker onDateChange={onDateChange} show={show} setShow={setShow} date={date} 
         minimumDate={new Date().setDate(new Date().getDate())}
         maximumDate={new Date().setDate(new Date().getDate() + 1)}
         maximumDateTime={new Date().setDate(new Date().getDate() + 1)}
         maximumDateTimeTime={new Date().setDate(new Date().getDate() + 1)}
        />
        {/* <CustomDropDown data={additionalServices} /> */}
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={services}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select"
          searchPlaceholder="Search..."
          value={dropdownValue}
          onChange={item => {
            setDropdownValue(item.value);
          }}
          renderLeftIcon={() => (
            <Icon
              style={styles.icon}
              type="evil"
              color="black"
              name="arrow-down"
              size={20}
            />
          )}
          renderItem={renderItem}
        />

        <CustomButton
          title="Submit"
          primary
          onPress={() => onSubmit(data['user']._id)}
          disabled={
            errors.patientName ||
            errors.address ||
            errors.pincode ||
            errors.mobile ||
            errors.email ||
            !(
              form.mobile &&
              form.location &&
              form.email &&
              dropdownValue
            )
              ? true
              : false
          }
        />
        <CustomButton title="Clear" primary   disabled={
            !(
              form.patientName ||
              form.address ||
              form.email ||
              form.mobile ||
              form.city ||
              form.date ||
              form.time
            )
          }/>
      </Container>
    </>
  );
};

export default AppointmentComponent;
