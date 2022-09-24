import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Input from '../common/Input/Input';
import CustomButton from './../common/CustomButton/CustomButton';
import Container from './../common/container/Container';
import {text} from '../../styles/Global';
import styles from './styles';
import {ROUTE_NAMES} from '../../constants/routeNames';
const RegisterComponent = ({
  onChange,
  form,
  onSubmit,
  errors,
  onClear,
  error,
  editable,
}) => {
  const {navigate} = useNavigation();

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
        {error && !error.error && <Text style={styles.errorMsg}>{error}</Text>}

        {error?.error && <Text>{error}</Text>}
        <Input
          label="FirstName"
          onChangeText={value => onChange({name: 'firstName', value})}
          value={form.firstName}
          error={errors.firstName}
          placeholder="First Name"
        />
        <Input
          label="LastName"
          onChangeText={value => onChange({name: 'lastName', value})}
          value={form.lastName}
          error={errors.lastName}
          placeholder="Last Name"
        />
        <Input
          label="Email"
          onChangeText={value => onChange({name: 'email', value})}
          value={form.email}
          error={errors.email}
          placeholder="E-mail"
        />
        <Input
          label="Mobile"
          onChangeText={value => onChange({name: 'mobile', value})}
          value={form.mobile}
          error={errors.mobile}
          keyboardType="numeric"
          maxLength={10}
          placeholder="Mobile"
        />
        <Input
          label="City"
          onChangeText={value => onChange({name: 'city', value})}
          value={form.city}
          error={errors.city}
          placeholder="City"
        />
        <Input
          label="Password"
          onChangeText={value => onChange({name: 'password', value})}
          value={form.password}
          error={errors.password}
          secureTextEntry={true}
          contextMenuHidden={true}
          placeholder="Password"
        />
        <Input
          label="Confirm Password"
          onChangeText={value => onChange({name: 'confirmPassword', value})}
          value={form.confirmPassword}
          error={errors.confirmPassword}
          secureTextEntry={true}
          contextMenuHidden={true}
          editable={editable}
          selectTextOnFocus={false}
          placeholder="Confirm Password"
        />
        <CustomButton
          loading={false}
          disabled={
            errors.email ||
            errors.password ||
            errors.mobile ||
            !(
              form.email &&
              form.mobile &&
              form.password &&
              form.confirmPassword
            )
              ? true
              : false
          }
          title="SignUp"
          onPress={onSubmit}
          primary
        />
        <CustomButton
          loading={false}
          title="Clear"
          primary
          onPress={onClear}
          disabled={
            !(
              form.lastName ||
              form.firstName ||
              form.email ||
              form.mobile ||
              form.city ||
              form.password ||
              form.confirmPassword
            )
          }
        />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <Pressable
            onPress={() => {
              navigate(ROUTE_NAMES.LOGIN);
            }}>
            <Text style={styles.linkBtn}>Login</Text>
          </Pressable>
        </View>
      </Container>
    </>
  );
};

export default RegisterComponent;
