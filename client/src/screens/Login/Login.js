import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import React, {useState, useContext, useEffect} from 'react';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import {GlobalContext} from './../../context/Provider';
import loginUser from '../../context/actions/loginUser';
const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(null);
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);
  const {params} = useRoute();

  const onSubmit = () => {
    if (form.email && form.mobile) {
      loginUser(form)(authDispatch);
    }
  };
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  const onClear = () =>{
    setForm({
      ['email']:'',
      ['mobile']:'',
      ['password']:'',
    })
  }

  return (
    <>
      <LoginComponent
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        justSignedUp={justSignedUp}
        error={error}
        loading={loading}
        isLoggedIn={isLoggedIn}
        data={data}
        onClear={onClear}
      />
    </>
  );
};

export default Login;
