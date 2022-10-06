import {ACTION_TYPES} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default (form, id) => async dispatch => {
  const requestPayload = {
    patientName: form.patientName || '',
    email: form.email || '',
    mobile: form.mobile || '',
  };
  console.log('requestPayload :>> ', requestPayload);
  dispatch({
    type: ACTION_TYPES.CREATE_APPOINTMENT_LOADING,
  });
  try {
    const res = await axiosInstance.post(`/appointment/${id}`, requestPayload);
    dispatch({
      type: ACTION_TYPES.CREATE_APPOINTMENT_SUCCESS,
      payload: res.data,
    });
    Alert.alert('Success');
    console.log(res?.data);
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.CREATE_APPOINTMENT_FAIL,
      payload: error?.response
        ? error?.response?.data
        : (error = 'Something went wrong, try agin'),
    });
  }
};
