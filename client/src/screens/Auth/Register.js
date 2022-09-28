import {View, Text, Alert} from 'react-native';
import React, {useRef, useState, useContext} from 'react';
import RegisterComponent from '../../components/AuthComponents/RegisterComponent';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {GlobalContext} from '../../context/Provider';
import registerUser, {clearAuthState} from '../../context/actions/registerUser';
import {ROUTE_NAMES} from '../../constants/routeNames';
import {useEffect} from 'react';
import axiosInstance from '../../helpers/axiosInstance';

const Register = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const [editable, setEditable] = useState(false);
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  const emailCheck =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const mobileCheck = /^[1-9]\d{9}$/;
  const {navigate} = useNavigation();

  useEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );
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
      }
       else if (name == 'mobile') {
        if (!mobileCheck.test(value)) {
          setErrors(prev => {
            return {...prev, [name]: 'Invalid Mobile'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      }
       else if (name === 'confirmPassword') {
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
      } 
     
      else if (name === 'password' || name === 'confirmPassword') {
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

  const onSubmit = async () => {
    axiosInstance
      .post('/register', {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        mobile: form.mobile,
        city: form.city,
        password: form.password,
        confirmPassword: form.confirmPassword,
      })
      .then(res => {
        console.log(res.data);
        if (res.data.status === 201) {
          Alert.alert('Register successful');

          navigate(ROUTE_NAMES.LOGIN);
        }
        // else if(res.data.status===400){
        //   Alert.alert('Both password should be same');

        // } 
        else {
          Alert.alert(res.data.message);
        }
      });
  };

  return (
    <>
      <RegisterComponent
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        onClear={onClear}
        errors={errors}
        error={error}
        editable={editable}
      />
    </>
  );
};

export default Register;
