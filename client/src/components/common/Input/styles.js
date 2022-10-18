import {StyleSheet} from 'react-native';
import appColors from '../../../styles/appColors';

export default StyleSheet.create({
  InputContainer: {
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    width: '100%',
    color: appColors.Blue,
    marginLeft: 20,
  },
  wrapper: {
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 5,
    margin: 4,
    width: '90%',
    marginLeft: 10,
  },
  error: {
    color: 'red',
  },
});
