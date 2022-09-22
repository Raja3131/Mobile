import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import Input from '../common/Input/Input';
import CustomButton from '../common/CustomButton/CustomButton';
import Container from '../common/container/Container';
import styles from './styles';
import {text} from '../../styles/Global';
import { ROUTE_NAMES } from './../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
const LoginComponent = ({onSubmit}) => {
    const {navigate} = useNavigation()
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

        <Input label="Email" />
        <Input label="Mobile" />
        <Input label="Password" />
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
