import {StyleSheet} from 'react-native';
import appColors from '../../styles/appColors';

export default StyleSheet.create({
  homeContainer: {
    flex: 1,
   
  },
  Headers: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.Blue,
    shadowColor: '#333333',
    shadowOffset: {width: 10, height: 10},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    padding: 20,
    borderRadius: 8,
    margin: 5,
    alignItems: 'center',
    textShadowRadius: 10,
    elevation: 10,
  },
  appointmentContainer:{
    flex:3,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: "row",
  },
  plusIconButton:{
    marginRight: 20,
  }
});
