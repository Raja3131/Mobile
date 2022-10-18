import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import appColors from '../../../styles/appColors'

const CustomText = ({children}) => {
  return (
    <View>
      <Text style={[styles.CustomText]}>{children}</Text>
    </View>
  )
}

export default CustomText

const styles = StyleSheet.create({
    CustomText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        fontWeight: '300',
        color:appColors.simpleBlue
    }
})