import { View, Text,Pressable,ActivityIndicator,TouchableOpacity } from 'react-native'
import React from 'react'
import appColors from '../../../styles/appColors'
import styles from './styles'
import { buttons } from '../../../styles/Global'

const CustomButton = ({loading,title,disabled,primary,onPress,style,...props}) => {
  const getBgColor = () => {
 
    if (primary) {
      return appColors.Blue;
    }
   
  };
  return (
    <>
     <Pressable
      disabled={disabled}
      style={[buttons.primary, {backgroundColor: getBgColor()}, style]}
      onPress={onPress}
      {...props}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : appColors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : appColors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      
      </View>
    </Pressable>
    </>
  )
}

export default CustomButton