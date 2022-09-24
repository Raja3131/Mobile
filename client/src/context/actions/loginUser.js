import {ACTION_TYPES} from './../../constants/actionTypes';
import axiosInstance from '../../helpers/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default ({email: email, mobile: mobile}) =>
  async dispatch => {
    dispatch({
      type: ACTION_TYPES.LOGIN_LOADING,
    });
    try {
      const res = await axiosInstance.post('/login', {
        email: email,
        mobile: mobile,
      });
      console.log(res.data.data)
      AsyncStorage.setItem('email',res.data.data)
      if (res.data.status == 200) {
        dispatch({
          type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ACTION_TYPES.LOGIN_FAIL,
          payload: res.data.message
            ? res.data.message
            : {error: res.data.message},
        });
        console.log(res.data.message)
      }
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try agin'},
      });
    }
  };
