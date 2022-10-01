import {useContext, useEffect, useState} from 'react';
import {View, Text, Pressable, Button} from 'react-native';
import {GlobalContext} from '../../context/Provider';
import styles from './styles';
import { TextStyles } from '../../styles/Global';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export const Home = () => {
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);
  console.log(data);
  const onLogOut = () => {
    logoutUser()(authDispatch);

  };
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       {
      
       }
       <View style={styles.Headers}>
       <Text style={[TextStyles.primaryText,{color:'black'}]}>Welcome To Heartly</Text>
       <Text style={[TextStyles.secondaryText,{color:'white'}]}>Hi {data['user'].firstName.toUpperCase()}</Text>
       </View>

       <View>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
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
      
      </View>
    </>
  );
};
