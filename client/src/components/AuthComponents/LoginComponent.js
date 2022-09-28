import { View, Text, Image, Pressable, Alert, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import Input from '../common/Input/Input';
import CustomButton from '../common/CustomButton/CustomButton';
import Container from '../common/container/Container';
import styles from './LoginStyles';
import {text, TextStyles} from '../../styles/Global';
import { ROUTE_NAMES } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import Icon from '../common/Icon/Icon';
import appColors from '../../styles/appColors';
import Message from '../common/Message/Message';
const LoginComponent = ({onSubmit,onChange,form,justSignedUp,error,loading,isLoggedIn,data,onClear,errors}) => {
    const {navigate} = useNavigation()
    const input = useRef(null)
    const [isSecureEntry, setIsSecureEntry] = useState(true);
   
  return (
    <>
      <Container>
   
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.jpg')}
          style={styles.logoImage}
        />
        <Text style={TextStyles.primaryText}>Welcome To Heartly</Text>
        <Text style={TextStyles.primaryText}>Login to ur Account</Text>

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
        error={errors.password} secureTextEntry={isSecureEntry} icon={ <TouchableOpacity
          onPress={() => {
            setIsSecureEntry((prev) => !prev);
          }}>
          <Text>{isSecureEntry ?  <Icon
        size={21}
        name="eye-off"
        type="feather"
        color={appColors.Blue}
      />   :<Icon
          size={21}
          name="eye"
          type="feather"
          color={appColors.Blue}
        /> }</Text>
        </TouchableOpacity>} iconPosition="right"
         />
        <CustomButton title="Login" loading={loading} disabled={errors.password||errors.mobile||!(form.mobile&&form.password)?true:false} primary onPress={onSubmit}/>
        <CustomButton title="Clear" disabled={!(form.mobile||form.password)} primary onPress={onClear}/>

        {error && !error.error && (
            <Message
            onDismiss={() => {

            }}
            danger
            message={error}
          />
          )}

          {error?.error && <Message danger message={error?.error} />}
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
