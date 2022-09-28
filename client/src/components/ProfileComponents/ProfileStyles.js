import { StyleSheet } from "react-native";
export default StyleSheet.create({
    profileContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
});