import { ACTION_TYPES } from "../../../constants/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default () => async(dispatch) => {
  try {
    await AsyncStorage.clear();
    dispatch({
      type: ACTION_TYPES.LOGOUT_USER,
    });
    
  } catch (error) {
    console.log(error)
  }
    
  };