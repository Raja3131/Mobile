import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import {ACTION_TYPES} from './../../constants/actionTypes';
import axiosInstance from './../../helpers/axiosInstance';

export default (form, id) =>
  async dispatch => {
    const requestPayload ={
        firstName:form.firstName || '',
        lastName:form.lastName || '',
        email:form.email || '',
        mobile:form.mobile || '',
        city: form.city || '',
    }
    console.log('requestPayload :>> ', requestPayload);
    dispatch({
      type: ACTION_TYPES.EDIT_LOADING,
    });
    try {
      const res = await axiosInstance.post(`/update-auth/${id}`,requestPayload);
      dispatch({
        type: ACTION_TYPES.REGISTER_SUCCESS,
        payload: res.data,
      });
      Alert.alert('Success')
      console.log(res.data)
      
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.REGISTER_FAIL,
        payload: error.response
          ? error.response.data
          : (error = 'Something went wrong, try agin'),
      });
    }
  };