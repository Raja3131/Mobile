import { StyleSheet } from "react-native";
import appColors from "../../styles/appColors";
export default StyleSheet.create({
    linkBtn: {
        paddingLeft: 17,
        color: appColors.Blue,
        fontSize: 16,
      },
    
      infoText: {
        fontSize: 17,
        color: appColors.Blue,

      },
      logoImage:{
        height: 100,
    width: 150,
    alignSelf: 'center',
      },
      createSection:{
        alignItems:'center'
      },
      errorMsg:{
        color:'red'
      }
})