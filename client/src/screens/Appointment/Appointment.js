import { View, Text, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import AppointmentComponent from '../../components/AppointmentComponent/AppointmentComponent'
import { GlobalContext } from '../../context/Provider';
import axiosInstance from '../../helpers/axiosInstance';

const Appointment = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const mobileCheck = /^[6-9]\d{9}$/;
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);


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
      else {
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
  const onSubmit = (id) => {
    axiosInstance
    .post(`/appointment/${id}`, {
      patientName: form.patientName,
      address: form.address,
      location: form.location,
      mobile: form.mobile,
      email: form.email,
      // password: form.services,
      confirmPassword: form.mobile,
      confirmPassword: form.email,
      // date: form.date,
      // time: form.time,
      // additionalServices:form.additionalServices

    })
    .then(res => {
      console.log(res.data);
      if (res.data.status === 201) {
        Alert.alert('Register successful');

      }
      // else if(res.data.status===400){
      //   Alert.alert('Both password should be same');

      // } 
      else {
        Alert.alert(res.data.message);
      }
    });
  }
  return (
   <>
   <AppointmentComponent onChange={onChange}
   errors={errors}
   form={form}
   onSubmit={onSubmit}
   />
   </>

  )
}

export default Appointment