import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../../helpers/axiosInstance';
import { ACTION_TYPES } from '../../../constants/actionTypes';
import axios from 'axios';

export default ({mobile:mobile, password: password}) =>
  async dispatch => {
    dispatch({
      type: ACTION_TYPES.LOGIN_LOADING,
    });
    try {
      const res = await axiosInstance.post('/login', {
        mobile: mobile,
        password: password,
      });
      console.log(res.data.message)
      if (res.data.status == 200) {
        console.log(res.data)
      // AsyncStorage.setItem('email',JSON.stringify(res.data))

        dispatch({
          type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: res.data,
        });
      } else {
      console.log(res.data)

        dispatch({
          type: ACTION_TYPES.LOGIN_FAIL,
          payload: res.data.message
          ? res.data.message
          : res.data.message
        });
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: error.response
          ? error.response.data
          : error='Something went wrong, try agin',
      });
    }
  };
