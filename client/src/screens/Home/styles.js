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
  
  itemContainer:{
    backgroundColor: appColors.white,
    height: 80,
    width: '80%',
    padding:10,
    borderBottomColor:appColors.Black,
    borderBottomWidth: 1,
    margin:2
    
    

  },
  Appointment:{
    justifyContent: 'center',
    alignItems: 'center',
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
