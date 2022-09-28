import { View, Text, Pressable } from 'react-native'
import React,{useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import { GlobalContext } from '../../context/Provider'
import Container from '../common/container/Container'
import ProfileStyles from './ProfileStyles'
import CustomButton from '../common/CustomButton/CustomButton'

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


            
        </View>
        <View>
         
 <View style={ProfileStyles.infoBoxWrapper}>
          <View style={[ProfileStyles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Text>Mobile</Text>

            <Text>{data['user'].mobile}</Text>
          </View>
          <View style={ProfileStyles.infoBox}>
            <Text>Email</Text>
            <Text>{data['user'].email}</Text>

          </View>
      </View>
        </View>
        <CustomButton
          primary
          title="Edit"
          onPress={()=>{
            navigate("EditProfile")
          }}
          />
        <CustomButton
            onPress={() => navigate('ChangePassword')}
            primary
            title="Change Password"
            >
                   
            </CustomButton>
        </Container>
    </>
  )
}

export default ProfileComponent