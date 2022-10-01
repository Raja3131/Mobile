import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AppointmentComponent from '../../components/AppointmentComponent/AppointmentComponent'

const Appointment = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const mobileCheck = /^[6-9]\d{9}$/;


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
  return (
   <>
   <AppointmentComponent onChange={onChange}
   errors={errors}
   form={form}
   />
   </>

  )
}

export default Appointment