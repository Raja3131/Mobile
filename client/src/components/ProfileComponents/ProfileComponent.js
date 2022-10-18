import {View, Text, Pressable, Image} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../../context/Provider';
import Container from '../common/container/Container';
import ProfileStyles from './ProfileStyles';
import CustomButton from '../common/CustomButton/CustomButton';
import {TextStyles} from '../../styles/Global';
import {Card} from '../common/Card/Card';
import ImgComponent from '../common/ImageComponent/ImgComponent';

const ProfileComponent = () => {
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);

  return (
    <>
      <Container>
        <View style={ProfileStyles.profileContainer}>
          <Text style={TextStyles.secondaryText}>Profile</Text>
          <Text style={TextStyles.secondaryText}>
            {data['user'].firstName.toUpperCase()}
          </Text>
          <ImgComponent src={require('../../assets/images/avatar.png')} />
          <CustomButton
            title="Change Image"
            style={{height: 40, width: 125}}
            picker
          />
        </View>
        <View>
          <View style={ProfileStyles.infoBoxWrapper}>
            <View
              style={[
                ProfileStyles.infoBox,
                {
                  borderRightColor: '#dddddd',
                  borderRightWidth: 1,
                },
              ]}>
              <Text style={TextStyles.secondaryText}>Mobile</Text>

              <Text style={TextStyles.secondaryText}>
                {data['user'].mobile}
              </Text>
            </View>
            <View style={ProfileStyles.infoBox}>
              <Text style={TextStyles.secondaryText}>Email</Text>
              <Text style={TextStyles.secondaryText}>{data['user'].email}</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomButton
            primary
            title="Edit"
            onPress={() => {
              navigate('EditProfile', {firstName: data['user'].firstName});
            }}
            style={{height: 50, width: 85}}
          />
          <CustomButton
            onPress={() => navigate('ChangePassword')}
            primary
            title="Change Password"
            style={{height: 50, width: 85}}></CustomButton>
        </View>
      </Container>
    </>
  );
};

export default ProfileComponent;
