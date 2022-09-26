import { View, Text, Image, Pressable, Alert } from 'react-native';
import React, { useRef } from 'react';
import Input from '../common/Input/Input';
import CustomButton from '../common/CustomButton/CustomButton';
import Container from '../common/container/Container';
import styles from './styles';
import {text} from '../../styles/Global';
import { ROUTE_NAMES } from './../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import Icon from '../common/Icon/Icon';
import appColors from '../../styles/appColors';
const LoginComponent = ({onSubmit,onChange,form,justSignedUp,error,loading,isLoggedIn,data,onClear,errors}) => {
    const {navigate} = useNavigation()
    const input = useRef(null)
   
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
        <Text style={text.primaryText}>Login to ur Account</Text>

        {/* <Input label="Email" onChangeText={(value)=>onChange({name:'email',value})} value={form.email } placeholder="user@example.com"
          error={errors.email}
          keyboardType="email-address"
          mode="outlined"

         /> */}
        <Input label="Mobile" onChangeText={(value)=>onChange({name:'mobile',value})} value={form.mobile} placeholder="Enter Mobile Number" 
          error={errors.mobile}
          maxLength={10}
          keyboardType="numeric"

        />
        <Input label="Password" onChangeText={(value)=>onChange({name:'password',value})} value={form.password} placeholder="Enter Password"
        error={errors.password} secureTextEntry={true} icon={<Icon
          size={21}
          name="eye"
          type="evil"
          color={appColors.Blue}
        />} iconPosition="right"
         />
        <CustomButton title="Login" loading={loading} disabled={errors.password||errors.mobile||!(form.mobile&&form.password)?true:false} primary onPress={onSubmit}/>
        <CustomButton title="Clear" disabled={!(form.mobile||form.password)} primary onPress={onClear}/>

        {error && !error.error && (
            <Text
            style={styles.errorMsg} 
              
            >{error}</Text>
          )}

          {error?.error && <Text style={styles.errorMsg}>{error}</Text>}
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
