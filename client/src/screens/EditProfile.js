import {View, Text, Pressable, Alert, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import RegisterComponent from '../components/AuthComponents/RegisterComponent';
import Input from '../components/common/Input/Input';
import {GlobalContext} from '../context/Provider';
import CustomButton from '../components/common/CustomButton/CustomButton';
import axiosInstance from './../helpers/axiosInstance';
import Container from '../components/common/container/Container';
import {buttons} from '../styles/Global';
import formValidators from '../utils/formValidator';
import styles from '../components/AuthComponents/RegisterStyles';
const EditProfile = ({route}) => {
  const [errors, setErrors] = useState({});
  const [editable, setEditable] = useState(false);
  const { authDispatch,authState: {error, loading, data}, } = useContext(GlobalContext);
  const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const mobileCheck = /^[1-9]\d{9}$/;
  const {firstName} = route.params
  const [form, setForm] = useState({
    firstName: firstName,
    lastName: data['user'].lastName,
    email: data['user'].email,
    mobile: data['user'].mobile,
    city: data['user'].city,
  });
  
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'email') {
        if (!emailCheck.test(value)) {
          setErrors(prev => {
            return {...prev, [name]: 'Invalid Email'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else if (name == 'mobile') {
        if (!mobileCheck.test(value)) {
          setErrors(prev => {
            return {...prev, [name]: 'Invalid Mobile'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else if (name === 'confirmPassword') {
        if (value !== form.password) {
          console.log(value, form.password);
          setErrors(prev => {
            return {...prev, [name]: 'Password not match'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else if (name === 'password' || name === 'confirmPassword') {
        if (value.length < 8) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 8 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
          setEditable(true);
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onClear = () => {
    Alert.alert('Clear!', 'Are you sure you want to clear?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },

      {
        text: 'OK',
        onPress: () => {
          setForm({
            ['firstName']: '',
            ['lastName']: '',
            ['email']: '',
            ['mobile']: '',
            ['city']: '',
            ['password']: '',
            ['confirmPassword']: '',
          });
          setEditable(false);
        },
      },
    ]);
  };

  const onSubmit = id => {
    axiosInstance
      .post(`/update-auth/${id}`, {
        firstName: form.firstName,
        lastName: form.lastName,
        mobile: form.mobile,
        email: form.email,
        city: form.city,
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          Alert.alert('successful');
        } else {
          Alert.alert('Error');
        }
      });
  };

  return (
    <>
      <Container>
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

        <CustomButton
          loading={false}
          disabled={
            errors.email || errors.mobile || !(form.email && form.mobile)
              ? true
              : false
          }
          title="Save"
          onPress={() => onSubmit(data['user']._id)}
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
              form.city
            )
          }
        />
      </Container>
    </>
  );
};

export default EditProfile;
