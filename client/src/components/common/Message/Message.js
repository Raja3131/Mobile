import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {View, Text, TextInput, ActivityIndicator, Pressable,An} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import styles from './styles';
import appColors from '../../../styles/appColors';
import * as Animatable from 'react-native-animatable';

const Message = ({
  message,
  onDismiss,
  retry,
  retryFn,
  primary,
  danger,
  info,
  success,

}) => {
  const [userDismissed, setDismissed] = React.useState(false);

  const getBgColor = () => {
    if (primary) {
      return appColors.Blue;
    }
    if (danger) {
      return 'red';
    }
    if (success) {
      return appColors.Blue;
    }

    if (info) {
      return appColors.grey;
    }
  };
  return (
    <>
      {userDismissed ? null : (
          <Animatable.View
          animation="bounceIn"
          easing="ease-out"
          duration={2000}
      >
        <Pressable
        onPress={()=>{
            console.log('Pressed')
            setDismissed(true)
        }}
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: appColors.white,
                textAlign:'center',
                fontSize:16
              }}>
              {message}
            </Text>
            <Text
                  style={{
                    color: appColors.white,
                  }}>
                  X
                </Text>

          
            
          </View>
        </Pressable>
        </Animatable.View>
      )}
    </>
  );
};

export default Message;