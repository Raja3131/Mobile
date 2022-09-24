import {ACTION_TYPES} from '../../constants/actionTypes';
import axiosInstance from '../../helpers/axiosInstance';
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
      if(res.data.status==200){
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        
      }
      else{
        dispatch({
          type: ACTION_TYPES.REGISTER_FAIL,
          payload: res.data.message
            ? res.data.message
            : {error: res.data.message},
        });
        console.log(res.data.message)
      }
      
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.REGISTER_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try agin'},
      });
    }
  };
