import { View, Text } from 'react-native'
import React,{useContext, useState} from 'react'
import RegisterComponent from '../components/AuthComponents/RegisterComponent'
import Input from '../components/common/Input/Input'
import { GlobalContext } from '../context/Provider'
import CustomButton from '../components/common/CustomButton/CustomButton'
const EditProfile = () => {
    const {
        authDispatch,
        authState: {error, loading, isLoggedIn, data},
      } = useContext(GlobalContext);
    const [firstName,setFirstName] = useState(data['user'].firstName.toUpperCase())

    const onChange = (text) =>{
        setFirstName(text)
    }
  return (
   <>
   <View>
    <Input title="FirstName" value={firstName} onChangeText={onChange}/>
    <CustomButton primary title="Save" />
   </View>
   </>
  )
}

export default EditProfile