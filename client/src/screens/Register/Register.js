import { View, Text, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import RegisterComponent from '../../components/RegisterComponent/RegisterComponent'
import axios from 'axios'
import { set } from 'mongoose'

const Register = () => {
  const myForm = useRef(null)

  const [form,setForm] = useState({})
  const onChange = ({name,value}) =>{
    setForm({...form,[name]:value})

  }
  const onClear = () =>{
      setForm({...form,})
      console.log(form)
  }
  const onSubmit = async() =>{
   try {
    axios.post('http://10.0.2.2:5000/register', {
      firstName:form.firstName,
      lastName:form.lastName,
      email:form.email,
      mobile:form.mobile,
      city:form.city,
      password:form.password,
      confirmPassword:form.confirmPassword,
    })
    .then((res)=>{
      if (res.status===201){ 
        Alert.alert('User Registered Successfully')
  
      }
      if(res.status==400){
        Alert.alert('User Registration failed')
      }
      else{
        Alert.alert('User Registration failed')

      }
    });
   
    
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
    />
    </>
  )
}

export default Register