import { StyleSheet } from "react-native";
import appColors from '../../../styles/appColors'

export default StyleSheet.create({
    InputContainer:{
        paddingVertical: 8,
    },
    textInput: {
        flex: 1,
        width: '100%',
        color:appColors.Blue  
      },
      wrapper: {
        height: 40,
        borderWidth: 2,
        borderRadius: 4,
        paddingHorizontal: 5,
    
        marginTop: 2,
      },
      error:{
        color: 'red'
      }
     
})