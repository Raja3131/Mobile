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
        color: appColors.white,
        fontSize: 16,
        backgroundColor: appColors.Blue,
        borderRadius: 10,
        textAlign: 'center',
        padding:5,
        elevation:20,
        shadowOffset: 0,
        textShadowRadius: 0
      },
    
      infoText: {
        fontSize: 17,
        color: appColors.Blue,

      },
      createSection:{
        alignItems:'center',
        // backgroundColor:'black'
      },
      errorMsg:{
        color:'red'
      }
})