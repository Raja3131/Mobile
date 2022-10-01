import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import appColors from '../../../styles/appColors';
import styles from './styles';
import {buttons, ButtonStyles} from '../../../styles/Global';

const CustomButton = ({
  loading,
  title,
  disabled,
  primary,
  onPress,
  style,
  picker,
  ...props
}) => {
  const getBgColor = () => {
    if (primary) {
      return appColors.Blue;
    }
    if(picker){
      return appColors.grey;
    }
  };
  return (
    <>
      <Pressable
        disabled={disabled}
        style={[ButtonStyles.primary, {backgroundColor: getBgColor()}, style]}
        onPress={onPress}
        {...props}>
        <View style={[styles.loaderSection]}>
          {loading && (
            <ActivityIndicator
              color={primary ? appColors.white : appColors.primary}
            />
          )}
          {title &&
            (disabled ? (
              <Text
                style={{
                  opacity: 0.5,
                  color: appColors.grey,
                }}>
                {loading ? 'Please wait...' : title}
              </Text>
            ) : (
              <Text
                style={{
                  opacity: 1,
                  color: appColors.white,
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                {loading ? 'Please wait...' : title}
              </Text>
            ))}
        </View>
      </Pressable>
    </>
  );
};

export default CustomButton;
