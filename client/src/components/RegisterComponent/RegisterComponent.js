import {View, Text, Image, Pressable, Alert,ScrollView,SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Input from '../common/Input/Input';
import CustomButton from './../common/CustomButton/CustomButton';
import Container from './../common/container/Container';
import {text} from '../../styles/Global';
import styles from './styles';
import { ROUTE_NAMES } from '../../constants/routeNames';
const RegisterComponent = ({onChange,form}) => {
  const {navigate} = useNavigation()
  const OnSubmit = () => {
    console.log('Hi');
  };
  const firstNameChange = (val) =>{
    
  }
  return (
    <>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.jpg')}
          style={styles.logoImage}
        />
        <Text style={text.primaryText}>Welcome To Heartly</Text>
        <Input
          label="FirstName"
          onChangeText={(value)=>onChange({name:'firstName',value})}
          value={form.firstName}
        />
        <Input
          label="LastName"
          onChangeText={(value)=>onChange({name:'lastName',value})}
          value={form.lastName}
        />
        <Input
          label="Email"
          onChangeText={(value)=>onChange({name:'email',value})}
          value={form.email}
        />
        <Input
          label="Mobile"
          onChangeText={(value)=>onChange({name:'mobile',value})}
          value={form.mobile}
        />
        <Input
          label="City"
          onChangeText={(value)=>onChange({name:'city',value})}
          value={form.city}
        />
        <CustomButton
          loading={false}
          disabled={false}
          title="SignUp"
          onPress={OnSubmit}
          primary
        />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <Pressable
              onPress={() => {
                navigate(ROUTE_NAMES.LOGIN)
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </Pressable>
          </View>
      </Container>
    </>
  );
};

export default RegisterComponent;
