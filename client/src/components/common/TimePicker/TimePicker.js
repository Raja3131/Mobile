import { View, Text } from 'react-native'
import React from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../CustomButton/CustomButton';

const TimePicker = ({time, show, setShow, setMode, onTimeChange,title,...props}) => {
    const showMode = currentMode => {
      if (Platform.OS === 'android') {
        setShow(true);
        // for iOS, add a button that closes the picker
      }
      setMode(currentMode);
    };
    const showTimepicker = () => {
        showMode('time');
      };
  
   return (
    <>
    <View>
    <CustomButton
          picker
          onPress={showTimepicker}
          title={<Text>Selected: {time.toLocaleTimeString()}</Text>}
        />
         {show && (
          <RNDateTimePicker
            testID="dateTimePicker"
            value={time}
            mode={'time'}
            is24Hour={true}
            onChange={onTimeChange}
            {...props}
           
          />
        )}
    </View>
    </>
   )
}

export default TimePicker