import {StyleSheet} from 'react-native';
import appColors from '../../../styles/appColors';

export default StyleSheet.create({
  wrapper: {
    height: 42,

    paddingHorizontal: 5,

    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  loaderSection: {
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    width: '100%',
  },

  error: {
    color: appColors.lossRed,
    paddingTop: 4,
    fontSize: 12,
  },
});