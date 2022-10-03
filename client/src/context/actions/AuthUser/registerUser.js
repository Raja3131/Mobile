import { ACTION_TYPES } from '../../../constants/actionTypes';
import { ROUTE_NAMES } from '../../../constants/routeNames';
import axiosInstance from '../../../helpers/axiosInstance';
import {useNavigation} from '@react-navigation/native'
export const clearAuthState = () => dispatch => {
  
  dispatch({
    type: ACTION_TYPES.CLEAR_AUTH_STATE,
  });
};
export default ({
    email,
    password,
    firstName: firstName,
    lastName: lastName,
  }) =>
   async dispatch =>
    {
    dispatch({
      type: ACTION_TYPES.REGISTER_LOADING,
    });
    try {
      const res = await axiosInstance.post('/register',{
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
      })
     dispatch({
      type:ACTION_TYPES.REGISTER_SUCCESS,
      payload:res.data
     })
     useNavigation.navigate(ROUTE_NAMES.LOGIN)
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.REGISTER_FAIL,
        payload: error.response
          ? error.response.data
          : error='Something went wrong, try agin',
      });
    }
  };
