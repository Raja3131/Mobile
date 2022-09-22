import {View, Text, Image, Pressable, Alert,ScrollView,SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Input from '../common/Input/Input';
import CustomButton from './../common/CustomButton/CustomButton';
import Container from './../common/container/Container';
import {text} from '../../styles/Global';
import styles from './styles';
import { ROUTE_NAMES } from '../../constants/routeNames';
const RegisterComponent = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [City, setCity] = useState('');
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
          onChangeText={text => firstNameChange(text)}
          value={FirstName}
        />
        <Input
          label="LastName"
          onChangeText={text => setLastName(text)}
          value={LastName}
        />
        <Input
          label="Email"
          onChangeText={text => setEmail(text)}
          value={LastName}
        />
        <Input
          label="Mobile"
          onChangeText={text => setMobile(text)}
          value={LastName}
        />
        <Input
          label="City"
          onChangeText={text => setCity(text)}
          value={LastName}
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
