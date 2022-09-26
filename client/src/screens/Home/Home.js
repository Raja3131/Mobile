import {useContext, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {GlobalContext} from '../../context/Provider';

export const Home = () => {
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);
  console.log(data);
  const onLogOut = () => {
    logoutUser()(authDispatch);

  };
//   useEffect(()=>{
//     var result = data.map(dat => ({ value: dat.id, text: dat.firstName }));
//     console.log(result)
//   },[])
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       {
      
       }
       <Text>Hi {data['user'].firstName.toUpperCase()}</Text>
      </View>
    </>
  );
};
