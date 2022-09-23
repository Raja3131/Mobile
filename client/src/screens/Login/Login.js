import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LoginComponent from '../../components/LoginComponent/LoginComponent'

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
    const onSubmit = () =>{
        setJustSignedUp(true)
    }
    const onChange = ({name, value}) => {
      setForm({...form, [name]: value});
    };
  return (
    <>
    <LoginComponent
    onSubmit={onSubmit}
    onChange={onChange}
    form={form}
    justSignedUp={justSignedUp}

    />
    </>
  )
}

export default Login