import {StyleSheet} from 'react-native';
import Variables from './Variables';
import appColors from './appColors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../helpers/Metrics';

const ButtonStyles = StyleSheet.create({
  primary: {
    flex: 1,
    height: verticalScale(40),
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor:appColors.Blue,
  },
  small: {
    flex: 1,
    height: verticalScale(30),
    marginLeft: 10,
    marginRight: 100,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor:appColors.Blue,

  },
});

const TextStyles = StyleSheet.create({
  primaryText: {
    fontSize: 22,
    textAlign: 'center',
    padding: 10,
    fontWeight: Variables.FONT_WEIGHT_MEDIUM,
  },
  secondaryText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 12,
    fontWeight: Variables.FONT_WEIGHT_MEDIUM,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: appColors.white,
  },
});

export {ButtonStyles, TextStyles};