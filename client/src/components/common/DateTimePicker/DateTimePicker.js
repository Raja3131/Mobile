import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../CustomButton/CustomButton';


const DateTimePicker = () => {
    const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  
  return (
   <>
     <View>
      <CustomButton picker onPress={showDatepicker} title={ <Text>Selected: {date.toLocaleDateString()}</Text>} />
      <CustomButton picker onPress={showTimepicker} title={ <Text>Selected: {date.toLocaleTimeString()}</Text>} />
     
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
   </>
  )
}

export default DateTimePicker