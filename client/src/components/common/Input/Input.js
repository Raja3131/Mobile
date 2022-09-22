import React from 'react';
import {View, Text, TextInput} from 'react-native';
import appColors from '../../../styles/appColors'
import styles from './styles';


const Input = ({label,onChangeText,value,error,...props}) => {
    const [focused, setFocused] = React.useState(false);
    const getBorderColor = () =>{
      if(focused){
        return appColors.Blue
      }
    }
    return (
        <>
        <View style={styles.InputContainer}>
        {label && <Text>{label}</Text>}
        <View
        style={[
          styles.wrapper,
          // {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), },
        ]}>
        {/* <View>{icon && icon}</View> */}

        <TextInput
          style={[styles.textInput, ]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
        </View>
        </>
    )
}

export default Input