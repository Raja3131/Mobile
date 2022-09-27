import { View, Text, Pressable } from 'react-native'
import React,{useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import { GlobalContext } from '../../context/Provider'
import Container from '../common/container/Container'
import ProfileStyles from './ProfileStyles'


const ProfileComponent = () => {
    const {navigate} = useNavigation()
    const {
        authDispatch,
        authState: {error, loading, isLoggedIn, data},
      } = useContext(GlobalContext);
    
  return (
    <>
    <Container>
     <View style={ProfileStyles.profileContainer}>
            <Text>Profile</Text>
            <Text>{data['user'].firstName.toUpperCase()}</Text>
            <Text>{data['user'].mobile}</Text>
            <Text>{data['user']._id}</Text>


            <Pressable
            onPress={() => navigate('ChangePassword')}
            >
                   <Text style={{}}> Change Password</Text>
            </Pressable>
        </View>
        </Container>
    </>
  )
}

export default ProfileComponent