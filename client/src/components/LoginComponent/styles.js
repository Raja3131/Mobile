import { StyleSheet } from "react-native";
import appColors from "../../styles/appColors";

export default StyleSheet.create({
    logoImage:{
        height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
      },
      linkBtn: {
        paddingLeft: 17,
        color: appColors.Blue,
        fontSize: 16,
      },
    
      infoText: {
        fontSize: 17,
        color: appColors.Blue,

      },
      createSection:{
        alignItems:'center',
        backgroundColor:'black'
      },
      errorMsg:{
        color:'red'
      }
})