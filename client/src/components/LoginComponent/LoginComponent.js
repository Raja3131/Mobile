import { View, Text, Image, Pressable, Alert } from 'react-native';
import React from 'react';
import Input from '../common/Input/Input';
import CustomButton from '../common/CustomButton/CustomButton';
import Container from '../common/container/Container';
import styles from './styles';
import {text} from '../../styles/Global';
import { ROUTE_NAMES } from './../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
const LoginComponent = ({onSubmit,onChange,form,justSignedUp}) => {
    const {navigate} = useNavigation()
  return (
    <>
      <Container>
      {justSignedUp && (
        Alert.alert('Login Successfully')
      )
}
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.jpg')}
          style={styles.logoImage}
        />
        <Text style={text.primaryText}>Welcome To Heartly</Text>
        <Text style={text.primaryText}>Login to ur Account</Text>

        <Input label="Email" onChangeText={(value)=>onChange({name:'email',value})} value={form.email } placeholder="Enter Email"/>
        <Input label="Mobile" onChangeText={(value)=>onChange({name:'mobile',value})} value={form.mobile} placeholder="Enter Mobile Number"/>
        <Input label="Password" onChangeText={(value)=>onChange({name:'password',value})} value={form.password} placeholder="Enter Password"/>
        <CustomButton title="Login" loading={false} disabled={false} primary onPress={onSubmit}/>
        <View style={styles.createSection}>
            <Text style={styles.infoText}>Don't have an account?</Text>
            <Pressable
              onPress={() => {
                navigate(ROUTE_NAMES.REGISTER)
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </Pressable>
          </View>
      </Container>
    </>
  );
};

export default LoginComponent;
