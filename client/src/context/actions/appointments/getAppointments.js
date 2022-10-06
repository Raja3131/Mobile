import { ACTION_TYPES } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_APPOINTMENTS_LOADING,
    });
  
    axiosInstance
      .get(`appointment/${id}`)
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: ACTION_TYPES.GET_APPOINTMENTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ACTION_TYPES.GET_APPOINTMENTS_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try again'},
        });
      });
  };