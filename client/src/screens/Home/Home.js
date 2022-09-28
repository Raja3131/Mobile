import {useContext, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {GlobalContext} from '../../context/Provider';
import styles from './styles';
import { TextStyles } from '../../styles/Global';
export const Home = () => {
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);
  console.log(data);
  const onLogOut = () => {
    logoutUser()(authDispatch);

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
       <Text style={[TextStyles.primaryText,{color:'white'}]}>Welcome To Heartly</Text>
       <Text style={[TextStyles.secondaryText,{color:'white'}]}>Hi {data['user'].firstName.toUpperCase()}</Text>
       </View>
      
      </View>
    </>
  );
};
