import {StyleSheet} from 'react-native';
import appColors from '../../styles/appColors';

export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: appColors.white,

   
  },
  Headers: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.Blue,
 
    
    padding: 20,
    borderRadius: 8,
    margin: 5,
    alignItems: 'center',
    textShadowRadius: 10,
    elevation: 10,
  },
  
  itemContainer:{
    backgroundColor: appColors.white,
    width: '100%',
    padding:10,
    borderColor:appColors.Blue,
    margin:5,
    shadowColor: appColors.dimBlack,
    borderWidth: 1,
  
    borderRadius:10,
    elevation:10
  },
  Appointment:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.white,

  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: "row",
  },
  plusIconButton:{
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: "row",

  },
});
