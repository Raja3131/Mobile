import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ChangePasswordComponent from '../components/ProfileComponents/ChangePasswordComponent';

const ChangePassword = () => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [editable, setEditable] = useState(false);
    const onChange = ({name, value}) =>{
        if (name === 'confirmPassword') {
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
         
          else if (name === 'newPassword' || name === 'confirmPassword') {
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
      
    }
  return (
   <>
   <ChangePasswordComponent
   onChange={onChange}
   form={form}
   editable={editable}
   errors={errors}
   />
   </>
  )
}

export default ChangePassword