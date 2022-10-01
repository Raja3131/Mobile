import { StyleSheet } from "react-native";
import appColors from "../../styles/appColors";
import Variables from "../../styles/Variables";

export default StyleSheet.create({
    appointmentHeader:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.Blue,
        elevation: 10,
        borderWidth: 1,
        borderColor: appColors.Blue,
        borderRadius: 8,
        width: '50%',
        marginLeft: '28%',
        height: '5%',
    },
    appointmentText:{
        color: appColors.white,
        fontWeight: '500',
        letterSpacing:1,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        textShadowColor:appColors.grey
    },
    
})