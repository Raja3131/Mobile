import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import React, {useState, useContext, useEffect} from 'react';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import {GlobalContext} from './../../context/Provider';
import loginUser from '../../context/actions/loginUser';
const Login = () => {
  const [form, setForm] = useState({});
  const [errors,setErrors] = useState({});
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
    setForm({...form,[name]:value})
    if (value !== '') {
      if (name === 'password' || name === 'confirmPassword') {
        if (value.length < 8) {
          setErrors((prev) => {
            return {...prev, [name]: 'This field needs min 8 characters'};
          });
        } else {
          setErrors((prev) => {
            return {...prev, [name]: null};
          });
        }
      } 
      
      else {
        setErrors((prev) => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors((prev) => {
        return {...prev, [name]: 'This field is required'};
      });
    }
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
        errors={errors}
      />
    </>
  );
};

export default Login;
