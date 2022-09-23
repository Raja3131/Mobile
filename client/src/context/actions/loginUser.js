import { ACTION_TYPES } from './../../constants/actionTypes';
import axiosInstance from '../../helpers/axiosInstance';
import axios from 'axios'

export default ({email:email,mobile:mobile}) =>(dispatch)=>{
    dispatch({
        type: ACTION_TYPES.LOGIN_LOADING,
      });
      axios.post('http://10.0.2.2:5000/login', {email:email,mobile:mobile})
      .then((res) => {
        console.log(res)
        dispatch({
            type: ACTION_TYPES.LOGIN_SUCCESS,
            payload: res.data,
          })
          
      })
      .catch((err) => {
        dispatch({
          type: ACTION_TYPES.LOGIN_FAIL,
          payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try agin'},
        });
      });
}