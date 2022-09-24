import { ACTION_TYPES } from "../../constants/actionTypes";
export default () => (dispatch) => {
    dispatch({
      type: ACTION_TYPES.LOGOUT_USER,
    });
  };