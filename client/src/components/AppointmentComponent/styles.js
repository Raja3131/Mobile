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
    dropdown: {
        margin: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
  
        elevation: 2,
      },
      icon: {
        marginRight: 5,
      },
      item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textItem: {
        flex: 1,
        fontSize: 16,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
    
})