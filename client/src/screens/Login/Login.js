import { View, Text } from 'react-native'
import React from 'react'
import LoginComponent from '../../components/LoginComponent/LoginComponent'

const Login = () => {
    const onSubmit = () =>{
        console.log('Login')
    }
  return (
    <>
    <LoginComponent
    onSubmit={onSubmit}

    />
    </>
  )
}

export default Login