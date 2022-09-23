import { View, Text } from 'react-native'
import React, { useState } from 'react'
import RegisterComponent from '../../components/RegisterComponent/RegisterComponent'

const Register = () => {
  const [form,setForm] = useState({})
  const onChange = ({name,value}) =>{
    setForm({...form,[name]:value})
  }
  const onSubmit = () =>{
    console.log('Register')
}
  return (
    <>
    <RegisterComponent
    form={form}
    onChange={onChange}
    onSubmit={onSubmit}
    />
    </>
  )
}

export default Register