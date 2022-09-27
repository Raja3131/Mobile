import { View, Text } from 'react-native'
import React from 'react'
import Container from '../common/container/Container'
import Input from '../common/Input/Input'
import CustomButton from '../common/CustomButton/CustomButton'

const ChangePasswordComponent = ({onChange,form,editable,errors}) => {
   
  return (
    <>
     <Container>
        <Input
        label="Old Password"
        onChangeText={value => onChange({name: 'password', value})}
        value={form.password}
        error={errors.password}
        />
         <Input
        label="New Password"
        onChangeText={value => onChange({name: 'newPassword', value})}
        value={form.newPassword}
        error={errors.newPassword}
        />
         <Input
        label="Confirm New Password"
        onChangeText={value => onChange({name: 'confirmPassword', value})}
        value={form.confirmPassword}
        error={errors.confirmPassword}
        
        />
        <CustomButton title="Confirm" primary/>
    </Container>
    </>
  )
}

export default ChangePasswordComponent