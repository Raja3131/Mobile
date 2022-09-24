import { View, Text, Alert } from 'react-native'
import React, { useRef, useState,useContext } from 'react'
import RegisterComponent from '../../components/RegisterComponent/RegisterComponent'
import axios from 'axios'
import {useNavigation} from '@react-navigation/native'
import { useFocusEffect } from '@react-navigation/native'
import { GlobalContext } from '../../context/Provider'
import registerUser,{clearAuthState} from '../../context/actions/registerUser'
import { ROUTE_NAMES } from '../../constants/routeNames'

const Register = () => {
  const [errors, setErrors] = useState({});
  const [form,setForm] = useState({})
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  const {navigate} = useNavigation()
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );
  const onClear = () =>{
    setForm({
      ['firstName']:'',
      ['lastName']:'',
      ['email']:'',
      ['mobile']:'',
      ['city']:'',
      ['password']:'',
      ['confirmPassword']:'',
    })
  }

  
  const onChange = ({name,value}) =>{
    setForm({...form,[name]:value})
    if (value !== '') {
      if (name === 'password' || name === 'confirmPassword') {
        if (value.length < 8) {
          setErrors((prev) => {
            return {...prev, [name]: 'This field needs min 8 characters'};
          });
        } else {
          setErrors((prev) => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors((prev) => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors((prev) => {
        return {...prev, [name]: 'This field is required'};
      });
    }

  }
 
  const onSubmit = async() =>{
   try {
   registerUser(form)(authDispatch)
  if(!error){
    navigate(ROUTE_NAMES.LOGIN)
  }
   

    
   } catch (error) {
      Alert.alert('Error')
   }
}

  return (
    <>
    <RegisterComponent
    form={form}
    onChange={onChange}
    onSubmit={onSubmit}
    onClear={onClear}
    errors={errors}
    error={error}
    
    />
    </>
  )
}

export default Register